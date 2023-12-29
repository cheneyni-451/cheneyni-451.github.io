import HTMLLogo from '$lib/assets/images/html.png';
import CSSLogo from '$lib/assets/images/css.png';
import CPPLogo from '$lib/assets/images/c++.png';
import TypeScriptLogo from '$lib/assets/images/typescript.png';
import JavaScriptLogo from '$lib/assets/images/javascript.png';
import LinuxLogo from '$lib/assets/images/linux.png';
import PythonLogo from '$lib/assets/images/python.png';
import ReactLogo from '$lib/assets/images/react.png';
import GitLogo from '$lib/assets/images/git.png';
import DynamoDBLogo from '$lib/assets/images/dynamodb.png';

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
