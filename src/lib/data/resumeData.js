/**
 * @typedef {Object} ResumeItem
 * @property {Date[]} date
 * @property {string} title
 * @property {string} company
 * @property {string} description
 */

/**
 * @type {ResumeItem[]}
 */
export const resumeItems = [
	{
		date: [new Date(2023, 1), new Date(2023, 3)],
		title: 'Software Development Engineer I',
		company: 'AWS',
		description: `Improved user experience of internship project after receiving feedback after deployment.
    Enhanced development workflow by integrating code review status notifications into a Slack channel to increase visibility of new code reviews.
    Removed expired data in DynamoDB table through scripting, resulting in a table size reduction of over 90%, thus lowering operational costs.
    Collaborated with team members to expedite tasks to be ready for upcoming production deployment.`
	},
	{
		date: [new Date(2022, 4), new Date(2022, 7)],
		title: 'Software Development Engineer Intern',
		company: 'AWS',
		description: `Designed an implementation of a new digest email feature and reviewed it with entire team for feedback.
    Implemented a reworked design of an entire webpage using TypeScript and React to enhance the customizability of the user experience.
    Worked with an assortment of AWS tools, such as Pinpoint to send email and SMS notifications to customers, and DynamoDB to store user data.`
	},
	{
		date: [new Date(2021, 5), new Date(2021, 7)],
		title: 'Software Development Intern',
		company: 'Red Rover',
		description: `Collaborated with senior developers and another intern to fix bugs in web application using TypeScript React.
    Communicated with the Sales team through daily Agile meetings to target and fix high priority bugs.
    Wrote regression tests for the UI using Cypress testing framework.`
	}
];
