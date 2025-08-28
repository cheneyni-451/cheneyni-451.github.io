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
import SvelteLogo from '$lib/assets/images/svelte.png';
import SpringBootLogo from '$lib/assets/images/springboot.png';
import MySQLLogo from '$lib/assets/images/mysql.png';
import JavaLogo from '$lib/assets/images/java.png';
import DockerLogo from '$lib/assets/images/docker.png';
import VSCodeLogo from '$lib/assets/images/vscode.png';
import IntelliJLogo from '$lib/assets/images/intellij.png';
import BootstrapLogo from '$lib/assets/images/bootstrap.png';
import RustLogo from '$lib/assets/images/rust.png';

/**
 * @typedef {Object} Skill
 * @property {string} text
 * @property {string} imgSrc
 */

/** @type {Skill[]} */
export const skills = [
	{ text: 'HTML', imgSrc: HTMLLogo },
	{ text: 'CSS', imgSrc: CSSLogo },
	{ text: 'Bootstrap', imgSrc: BootstrapLogo },
	{ text: 'JavaScript', imgSrc: JavaScriptLogo },
	{ text: 'TypeScript', imgSrc: TypeScriptLogo },
	{ text: 'React', imgSrc: ReactLogo },
	{ text: 'Svelte', imgSrc: SvelteLogo },
	{ text: 'Java', imgSrc: JavaLogo },
	{ text: 'Spring Boot', imgSrc: SpringBootLogo },
	{ text: 'Python', imgSrc: PythonLogo },
	{ text: 'C++', imgSrc: CPPLogo },
	{ text: 'Rust', imgSrc: RustLogo },
	{ text: 'DynamoDB', imgSrc: DynamoDBLogo },
	{ text: 'MySQL', imgSrc: MySQLLogo },
	{ text: 'Git', imgSrc: GitLogo },
	{ text: 'Linux', imgSrc: LinuxLogo },
	{ text: 'Docker', imgSrc: DockerLogo },
	{ text: 'VSCode', imgSrc: VSCodeLogo },
	{ text: 'IntelliJ IDEA', imgSrc: IntelliJLogo }
];
