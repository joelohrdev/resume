export const profile = {
	name: 'Joe Lohr',
	role: 'Senior Laravel Engineer',
	headline: 'Senior Laravel Engineer building compliance software and AI tools for car dealerships',
	location: 'Island Lake, Illinois',
	email: 'emailme@joelohr.com',
	linkedin: 'https://www.linkedin.com/in/joelohrdev/',
	github: 'jlarm',
	// High-level summary for the home page. The resume page keeps its own, longer intro.
	summary:
		"I've been building websites and web apps for 15 years. At Automotive Risk Management Partners I'm the only developer on the compliance platform car dealerships use, so I work directly with the people who use it: our compliance consultants, leadership and the dealerships themselves. When someone asks for a feature, I meet with them, plan it and build it, then demo it to the consultants, write the docs and answer the support tickets myself. Before that I spent 11 years at TurnKey Digital on a team of five developers and designers, meeting with prospective and current clients online and in person.",
};

export const jobs = [
	{
		company: 'Automotive Risk Management Partners',
		title: 'Laravel Web App Developer',
		start: 'Dec 2022',
		end: 'Present',
		summary:
			"I build and run the compliance platform for car dealerships and the tools around it. When a dealership asked for a way to track remediation of audit violations, I met with them, planned it and built it, and they use it today.",
		points: [
			"Sole developer of the company's compliance platform for car dealerships, a multi-database, multi-tenant Laravel app built on stancl/tenancy. I handle the architecture, security hardening, deployment and support.",
			'Built the compliance features dealerships use for the FTC Safeguards Rule and other requirements.',
			'Work directly with compliance consultants, leadership and dealerships: I gather requirements in meetings, demo new features to consultants, write the docs and answer help desk tickets myself.',
			'Met with a dealership that wanted to track remediation of audit violations, planned the feature with them and shipped it. Dealerships use it today.',
			'Designed a five-level role hierarchy: admin, consultant, owner, manager and employee.',
			'Built a tool-using AI compliance assistant with tenant-scoped authorization, so its answers only draw on data the user can access.',
			'Built an iOS audit app that consultants use at dealerships to record audits and photos, even offline. It syncs to the platform through a Laravel API and cut a typical audit from 1–2 hours to 20–30 minutes.',
			'Diagnosed why autorisknow.com was missing from AI-generated answers, then shipped server-side rendering, sitemap fixes and structured data.',
			'Also built and run the marketing site, a help desk, a sales CRM, courses and quizzes, PDF reports and third-party integrations.',
		],
	},
	{
		company: 'TurnKey Digital',
		title: 'WordPress Developer',
		start: 'Mar 2011',
		end: 'Dec 2022',
		summary:
			'Built custom WordPress sites for local businesses on a team of five developers and designers. I met with prospective and current clients online and in person, and shot product and location photos and video for them.',
		points: [
			'Built custom WordPress sites for local businesses on a team of five developers and designers.',
			'Met regularly with prospective and current clients, online and in person.',
			'Shot product and location photos and video for clients.',
		],
	},
];

// Ordered by relevance to the target role.
export const projects: { name: string; note: string; stack: string; url?: string }[] = [
	{
		name: 'ARMP compliance dashboard',
		note: 'Multi-tenant compliance platform for car dealerships, with a separate database per dealership, five role levels, courses and quizzes, vendor and audit forms, remediation tracking for audit violations, PDF reports, and an AI assistant that answers compliance questions from tenant-scoped data.',
		stack: 'Laravel, stancl/tenancy, Inertia, Vue, TypeScript',
	},
	{
		name: 'ARMP help desk',
		note: "Support desk for tickets dealerships open from inside the dashboard. The two apps never read each other's database; they trade signed, retry-safe events in both directions. An MCP server lets staff work tickets from Claude Code, which reads the conversation, checks the dashboard's docs, and drafts a reply that goes out under the staff member's name once they approve it.",
		stack: 'Laravel, Laravel MCP, Inertia, Vue, TypeScript',
	},
	{
		name: 'ARMP Audit iOS app',
		note: 'Field app consultants use to record OSHA, body shop, GLBA and deal jacket audits at the dealership, with photos. It works offline, queues changes, and syncs to the compliance dashboard through a Laravel API. A typical audit went from 1–2 hours to 20–30 minutes.',
		stack: 'Swift, SwiftUI, SwiftData, Laravel',
	},
	{
		name: 'Self-hosted error tracker',
		note: "Accepts errors in Sentry's envelope format, so apps already using a Sentry SDK can point at it without code changes. Repeat errors are grouped into issues by a SHA-256 fingerprint.",
		stack: 'Laravel, Horizon, React, TypeScript, shadcn/ui',
	},
	{
		name: 'autorisknow.com',
		note: "ARMP's marketing site, with server-side rendering and structured data for AI search, plus AI tools that draft meta descriptions, keywords and other SEO copy.",
		stack: 'Laravel, Livewire, Claude API',
		url: 'https://autorisknow.com',
	},
	{
		name: 'ARMP CRM',
		note: 'Sales CRM for dealership contacts and email campaigns, with AI help for drafting emails and call notes.',
		stack: 'Laravel, Inertia, Vue, TypeScript',
	},
];

// Most relevant to the target role first.
export const skills = [
	{
		group: 'Back end',
		items: ['Laravel', 'stancl/tenancy', 'Laravel Horizon', 'Inertia', 'Livewire', 'Filament', 'MySQL', 'SQLite', 'WordPress'],
	},
	{ group: 'AI', items: ['Claude API', 'Claude Code', 'AI tool use', 'MCP servers', 'Prompt engineering'] },
	{ group: 'Languages', items: ['PHP', 'TypeScript', 'JavaScript', 'Swift', 'Go', 'HTML', 'CSS'] },
	{ group: 'Front end', items: ['Vue', 'React', 'Tailwind CSS', 'Alpine.js'] },
	{ group: 'iOS', items: ['SwiftUI', 'SwiftData'] },
	{ group: 'Practice', items: ['Object-oriented PHP', 'MVC', 'Pest', 'Larastan', 'Git'] },
	{ group: 'Hosting and services', items: ['Laravel Cloud', 'Forge', 'Ploi', 'DigitalOcean', 'Cloudflare', 'Sentry', 'Mailgun'] },
	{ group: 'Media', items: ['Photography', 'Video'] },
	{ group: 'Currently learning', items: ['Python'] },
];

export const caseStudy = {
	title: 'A tenant-scoped AI compliance assistant',
	parts: [
		{
			label: 'Problem',
			text: "Dealership staff ask compliance questions whose answers depend on their own dealership's records, like \"Where are we at with employees completing their courses, and who hasn't finished yet?\" A generic chatbot can't see those records, and one that could see everything would leak data between dealerships and roles.",
		},
		{
			label: 'Constraints',
			text: "Each dealership has its own database through stancl/tenancy. Users sit at one of five role levels, from admin to employee, and should see only what their role allows. I'm the only developer and I answer the support tickets too, so it had to be simple to maintain.",
		},
		{
			label: 'Approach',
			text: "I gave the model tools to call rather than putting records in the prompt. Each tool runs inside the current tenant and checks the user's permissions before it returns anything, so the model only sees what that user could open in the app.",
		},
		{
			label: 'Tradeoffs',
			text: 'Tools take more work than stuffing context into a prompt, and each new kind of question needs a new tool. In exchange, the access rules live in application code, and the prompt has no say in them.',
		},
		{
			label: 'Result',
			text: 'The assistant answers compliance questions inside the dashboard, and its answers only draw on data the user can already access.',
		},
	],
};
