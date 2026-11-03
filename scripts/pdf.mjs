// Renders the built site (dist/) to public/joe-lohr-resume.pdf with headless Chrome.
// `npm run pdf` builds, writes the PDF, then builds again so dist/ includes it.
// Run it after changing resume content, then commit the PDF.
import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { extname, join, resolve } from 'node:path';

const root = resolve('dist');
const out = resolve('public/joe-lohr-resume.pdf');
const types = {
	'.html': 'text/html',
	'.css': 'text/css',
	'.js': 'text/javascript',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.jpg': 'image/jpeg',
	'.png': 'image/png',
};

const chrome = [
	process.env.CHROME_PATH,
	'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
	'/usr/bin/google-chrome',
	'/usr/bin/chromium',
].find((p) => p && existsSync(p));

if (!chrome) {
	console.error('Chrome not found. Set CHROME_PATH to a Chrome or Chromium binary.');
	process.exit(1);
}

const server = createServer(async (req, res) => {
	let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
	if (path.endsWith('/')) path += 'index.html';
	const file = join(root, path);
	if (!file.startsWith(root)) return res.writeHead(403).end();
	try {
		const body = await readFile(file);
		res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' }).end(body);
	} catch {
		res.writeHead(404).end();
	}
});

await new Promise((r) => server.listen(0, '127.0.0.1', r));

try {
	// Async, so the server above can answer Chrome while it renders.
	await promisify(execFile)(
		chrome,
		[
			'--headless=new',
			'--no-pdf-header-footer',
			'--virtual-time-budget=5000',
			`--print-to-pdf=${out}`,
			`http://127.0.0.1:${server.address().port}/`,
		],
		{ timeout: 60_000 },
	);
	console.log(`Wrote ${out}`);
} finally {
	server.close();
}
