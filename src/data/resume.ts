export const profile = {
	name: 'Joe Lohr',
	role: 'Laravel developer',
	location: 'Island Lake, Illinois',
	email: 'emailme@joelohr.com',
	linkedin: 'https://www.linkedin.com/in/joelohrdev/',
	github: 'jlarm',
};

export const jobs = [
	{
		company: 'Automotive Risk Management Partners',
		title: 'Laravel Web App Developer',
		start: 'Dec 2022',
		end: 'Present',
		points: [
			"Sole developer of the company's compliance dashboard for the automotive industry, built with Laravel, Inertia, Vue and Tailwind CSS.",
			'Built multi-tenancy, employee invites, roles and permissions, courses and quizzes, PDF reports, vendor and audit forms, third-party API integrations, notifications and email reminders.',
			"Write and tune the prompts behind the dashboard's AI features.",
			"Build and run the company's marketing site, autorisknow.com, in Laravel.",
		],
	},
	{
		company: 'TurnKey Digital',
		title: 'WordPress Developer',
		start: 'Mar 2011',
		end: 'Dec 2022',
		points: ['Built custom WordPress sites for local businesses.', 'Shot product and location photos and video for clients.'],
	},
];

export const projects: { name: string; note: string; stack: string; url?: string }[] = [
	{
		name: 'ARMP compliance dashboard',
		note: 'Compliance software for car dealerships, with an AI assistant that answers compliance questions.',
		stack: 'Laravel, Inertia, Vue, TypeScript',
	},
	{
		name: 'autorisknow.com',
		note: "ARMP's marketing site, with AI tools for SEO.",
		stack: 'Laravel, Livewire, Claude API',
		url: 'https://autorisknow.com',
	},
	{
		name: 'Eagles Baseball Travel',
		note: 'Website for a travel baseball team, with lesson booking and a Stripe store.',
		stack: 'Laravel, Inertia, Vue, TypeScript',
		url: 'https://eagleselitebaseball.com',
	},
	{
		name: 'ARMP CRM',
		note: 'Sales CRM for dealership contacts and email campaigns, with AI help for drafting emails and call notes.',
		stack: 'Laravel, Inertia, Vue, TypeScript',
	},
];

export const skills = [
	{ group: 'Languages', items: ['PHP', 'JavaScript', 'TypeScript', 'Python', 'HTML', 'CSS'] },
	{ group: 'Back end', items: ['Laravel', 'Inertia', 'Livewire', 'Filament', 'WordPress', 'MySQL', 'SQLite'] },
	{ group: 'Front end', items: ['Vue', 'React', 'Tailwind CSS', 'Alpine.js'] },
	{ group: 'Practice', items: ['Object-oriented PHP', 'MVC', 'Pest', 'Larastan', 'Git', 'Prompt engineering'] },
	{ group: 'Hosting and services', items: ['Laravel Cloud', 'Forge', 'Ploi', 'DigitalOcean', 'Cloudflare', 'Sentry', 'Mailgun'] },
	{ group: 'Media', items: ['Photography', 'Video', 'Photoshop', 'Premiere Pro'] },
];

