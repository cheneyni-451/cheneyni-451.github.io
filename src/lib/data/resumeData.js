/**
 * @typedef {Object} ResumeItem
 * @property {Date[]} date
 * @property {string} title
 * @property {string} company
 * @property {string} description
 * @property {string[]} tags
 */

/**
 * @type {ResumeItem[]}
 */
export const resumeItems = [
	{
		date: [new Date(2023, 8)],
		title: 'Career Transition',
		description: `
		Following a company-wide restructuring, completed an intensive Java-focused full-stack training program at HTD Talent,
		obtained AWS Certified Cloud Practitioner and Developer - Associate certifications,
    and currently maintaining the American Chinese Pickleball Association website while developing
    a chat app using multiple different frontends and backends to reinforce and broaden my knowledge.`
	},
	{
		date: [new Date(2023, 1), new Date(2023, 6)],
		title: 'Software Development Engineer I',
		company: 'AWS',
		description: `
    Enhanced development workflow by increasing visibility of new code reviews using Slack.
    Removed expired data, thus lowering operational costs.`,
		tags: ['React', 'TypeScript', 'DynamoDB']
	},
	{
		date: [new Date(2022, 4), new Date(2022, 7)],
		title: 'Software Development Engineer Intern',
		company: 'AWS',
		description: `Designed an implementation of a new digest email feature for an appointment scheduling web app.`,
		tags: ['React', 'TypeScript', 'DynamoDB', 'Kinesis']
	},
	{
		date: [new Date(2021, 5), new Date(2021, 7)],
		title: 'Software Development Intern',
		company: 'Red Rover',
		description: `
    Collaborated with senior developers and another intern to fix bugs in web application,
    and wrote regression tests for the UI using Cypress testing framework.`,
		tags: ['React', 'TypeScript', 'Cypress', 'C#']
	}
];
