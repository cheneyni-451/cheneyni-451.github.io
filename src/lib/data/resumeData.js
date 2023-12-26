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
		date: [new Date(2023, 1), new Date(2023, 3)],
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
