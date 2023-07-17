import MY_EXPERIENCES from './experiences.params';
import MY_PROJECTS from './projects.params';
import MY_SKILLS from './skills.params';
import {
	Platform,
	type HomePageParams,
	type ProjectPageParams,
	type ExperiencePageParams,
	type SkillsPageParams,
	type ResumePageParams,
	type SearchPageParams
} from './types';
import { Icons } from './utils';

export const TITLE_SUFFIX = 'Portfolio';

export const NavBar = {
	home: 'Home',
	personal: 'Projects',
	career: 'Experiences',
	resume: 'Resume',
	skills: 'Skills'
};

export const getPlatfromIcon = (platform: Platform): Icons => {
	switch (platform) {
		case Platform.GitHub:
			return Icons.GitHub;
		case Platform.Linkedin:
			return Icons.LinkedIn;
		case Platform.StackOverflow:
			return Icons.StackOverflow;
		case Platform.Facebook:
			return Icons.Facebook;
		case Platform.Email:
			return Icons.Email;
		case Platform.Twitter:
			return Icons.Twitter;
		case Platform.Youtube:
			return Icons.Youtube;
	}
};

export const HOME: HomePageParams = {
	title: 'Yash Sarang',
	name: 'Yash',
	lastName: 'Sarang',
	description:
		'Smart-working, Calm minded, and task-driven. Exposed to and interested in programming for 6+ years. Proficient at implementing and adapting new techniques. Good at Leading, Communicating, and working with people.',
	links: [
		{ platform: Platform.GitHub, link: 'https://github.com/YashSarang/' },
		{
			platform: Platform.Linkedin,
			link: 'https://www.linkedin.com/in/yash-sarang/'
		},
		{
			platform: Platform.Email,
			link: 'yash.sarang9@gmail.com'
		}
	]
};

export const PROJECTS: ProjectPageParams = {
	title: 'Projects',
	items: MY_PROJECTS
};

export const EXPERIENCES: ExperiencePageParams = {
	title: 'Experiences',
	items: MY_EXPERIENCES
};

export const SKILLS: SkillsPageParams = {
	title: 'Skills',
	items: MY_SKILLS
};

export const RESUME: ResumePageParams = {
	title: 'Resumé',
	item: 'https://drive.google.com/file/d/1EaKSVaZD7qfebZANsYnzIbl5vTqK7Jqq/view?usp=sharing'
};

export const SEARCH: SearchPageParams = {
	title: 'Search'
};
