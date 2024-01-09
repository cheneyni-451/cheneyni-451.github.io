/**
 * @typedef {Object} ProjectItem
 * @property {string} title
 * @property {string} description
 * @property {string[]} tags
 */

/**
 * @type {ProjectItem[]}
 */
export const projectItems = [
	{
		title: 'Personal Website',
		description: `It is the website that you are on right now. After hearing about Svelte,
      I wanted to make something with it, so I decided to make my personal website using Svelte to learn the framework.`,
		tags: ['Svelte', 'JavaScript', 'CSS', 'HTML']
	},
	{
		title: 'Sudoku Solver Browser Extension',
		description: `Extensible sudoku solving browser extension used to solve online sudoku puzzle quickly.
    Compatible with any sudoku website by adding a parser.`,
		tags: ['JavaScript']
	},
	{
		title: 'Thread Library',
		description: `Worked with in a group of 3 to implement a user level thread library,
    including synchronization primitives (mutex and condition variables) and FIFO CPU scheduling.`,
		tags: ['School Project', 'C++']
	},
	{
		title: 'Network File System',
		description: `Implemented low-level network file server in a team with
    read-write support and communication through TCP.
    Designed with multithreading to allow concurrent operations from an
    arbitrary number of clients, and database consistency regardless of erratic system crashes.`,
		tags: ['School Project', 'C++']
	}
];
