import { resumeItems } from '$lib/data/resumeData';
import { pageLoading } from '$lib/stores';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	pageLoading.set(true);

	return {
		resumeItems: resumeItems
			.sort((a, b) => b.date[0].getTime() - a.date[0].getTime())
			.map(({ date, company, title, description, tags }) => {
				const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
					month: 'short',
					year: 'numeric'
				});
				const dateString =
					date.length === 1
						? `${dateTimeFormat.format(date[0])} - Present`
						: dateTimeFormat.formatRange(date[0], date[1]);

				const titleString = `${title} · ${company}`;

				return { date: dateString, title: titleString, description, tags };
			})
	};
}
