// Reads the public contribution calendar GitHub renders on profile pages.
// No token needed. Runs at build time, so the graph is as fresh as the last deploy.

export interface Day {
	date: string; // YYYY-MM-DD
	level: 0 | 1 | 2 | 3 | 4;
	count: number;
}

export interface Calendar {
	year: number;
	total: number;
	weeks: (Day | null)[][]; // columns of 7, Sunday first; null pads days outside the year
	months: { label: string; week: number }[];
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export async function getContributions(user: string, year: number): Promise<Calendar | null> {
	const url = `https://github.com/users/${user}/contributions?from=${year}-01-01&to=${year}-12-31`;
	let html: string;
	try {
		const res = await fetch(url, { headers: { 'User-Agent': 'joelohr.com build' } });
		if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
		html = await res.text();
	} catch (err) {
		console.warn(`[contributions] could not load ${url}: ${err}`);
		return null;
	}

	// Each day is a <td id=… data-date=… data-level=…>; its count lives in a <tool-tip for=id>.
	const counts = new Map<string, number>();
	for (const m of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)/g)) {
		const n = m[2].match(/^(\d[\d,]*) contribution/);
		counts.set(m[1], n ? Number(n[1].replace(/,/g, '')) : 0);
	}

	const byDate = new Map<string, Day>();
	for (const m of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
		const tag = m[0];
		const date = tag.match(/data-date="([^"]+)"/)![1];
		if (!date.startsWith(`${year}-`)) continue;
		const id = tag.match(/\bid="([^"]+)"/)?.[1] ?? '';
		const level = Number(tag.match(/data-level="(\d)"/)?.[1] ?? 0) as Day['level'];
		byDate.set(date, { date, level, count: counts.get(id) ?? 0 });
	}
	if (byDate.size === 0) {
		console.warn(`[contributions] no days found in ${url}; GitHub's markup may have changed`);
		return null;
	}

	// Lay the year out as GitHub does: one column per week, Sunday at the top.
	const weeks: (Day | null)[][] = [];
	const months: Calendar['months'] = [];
	const day = new Date(Date.UTC(year, 0, 1));
	let week: (Day | null)[] = Array(day.getUTCDay()).fill(null);
	while (day.getUTCFullYear() === year) {
		const date = day.toISOString().slice(0, 10);
		if (day.getUTCDate() === 1) months.push({ label: MONTHS[day.getUTCMonth()], week: weeks.length });
		week.push(byDate.get(date) ?? { date, level: 0, count: 0 });
		if (week.length === 7) {
			weeks.push(week);
			week = [];
		}
		day.setUTCDate(day.getUTCDate() + 1);
	}
	if (week.length) weeks.push([...week, ...Array(7 - week.length).fill(null)]);

	const total = [...byDate.values()].reduce((sum, d) => sum + d.count, 0);
	return { year, total, weeks, months };
}
