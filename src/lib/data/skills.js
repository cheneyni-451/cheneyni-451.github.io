import HTMLLogo from '$lib/assets/html.png';
import CSSLogo from '$lib/assets/css.png';
import CPPLogo from '$lib/assets/c++.png';
import TypeScriptLogo from '$lib/assets/typescript.png';
import JavaScriptLogo from '$lib/assets/javascript.png';
import LinuxLogo from '$lib/assets/linux.png';
import PythonLogo from '$lib/assets/python.png';
import ReactLogo from '$lib/assets/react.png';
import GitLogo from '$lib/assets/git.png';
import DynamoDBLogo from '$lib/assets/dynamodb.png';

/**
 * @typedef {Object} Skill
 * @property {string} text
 * @property {string} imgSrc
 */

/** @type {Skill[]} */
export const skills = [
	{ text: 'HTML', imgSrc: HTMLLogo },
	{ text: 'CSS', imgSrc: CSSLogo },
	{ text: 'JavaScript', imgSrc: JavaScriptLogo },
	{ text: 'TypeScript', imgSrc: TypeScriptLogo },
	{ text: 'React', imgSrc: ReactLogo },
	{ text: 'C++', imgSrc: CPPLogo },
	{ text: 'Python', imgSrc: PythonLogo },
	{ text: 'DynamoDB', imgSrc: DynamoDBLogo },
	{ text: 'Git', imgSrc: GitLogo },
	{ text: 'Linux', imgSrc: LinuxLogo }
];
