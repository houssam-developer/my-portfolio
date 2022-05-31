
import { useEffect, useRef, useState } from 'react';
import {
	MdEmail, MdPhone, MdViewInAr, MdHome, MdPerson, MdWork,
	MdOutlineCode, MdWeb, MdOutlineConstruction, MdContacts, MdChat, MdLaptop,
	MdOutlinePhonelink, MdDns, MdCode, MdOutlineSettingsApplications, MdBackup,
	MdAspectRatio
} from "react-icons/md";
import {
	DiCss3, DiJsBadge, DiHtml5, DiSass, DiReact, DiNodejs, DiNpm, DiIntellij, DiVisualstudio, DiWindows,
	DiLinux, DiGithub, DiGit, DiResponsive, DiNodejsSmall, DiMysql, DiSqllite, DiMongodb

} from "react-icons/di";
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

const ProjectType = {
	ALL: 'all',
	REACT: 'react',
	VANILLA: 'vanilla'
};

function App() {
	const [typeProject, setTypeProject] = useState('');
	const [projects, setProjects] = useState([]);
	const [projectsAll, setProjectsAll] = useState([]);
	const [projectsReact, setProjectsReact] = useState([]);
	const [projectsVanilla, setProjectsVanilla] = useState([]);
	const [hobbies, setHobbies] = useState([
		{
			type: 'Coding',
			image: 'images/coding.jpg',
			quote: 'Make it work, make it right, make it fast.',
			quoteAuthor: 'Kent Beck'
		},
		{
			type: 'Reading',
			image: 'images/reading.jpg',
			quote: 'The more that you read, the more things you will know. The more that you learn, the more places you’ll go.',
			quoteAuthor: 'Dr. Seuss'
		},
		{
			type: 'Walking',
			image: 'images/walking.jpg',
			quote: 'There is no habit you will value so much as that of walking far without fatigue.',
			quoteAuthor: 'Thomas Jefferson'
		},
		{
			type: 'Gaming',
			image: 'images/gaming.jpg',
			quote: 'Gaming brings people together.',
			quoteAuthor: 'Lisa Su'
		},
	]);

	const [skills, setSkills] = useState([
		{
			type: 'Front End',
			typeIcon: <MdOutlinePhonelink size={50} className='text-cyan-400' />,
			description: 'I like to code things from scratch, and enjoy bringing ideas in the browser',
			languagesTitle: 'Languages',
			languages: [
				{ icon: <DiHtml5 size={20} className='text-red-500  min-w-[18px]' />, tag: 'HTML' },
				{ icon: <DiCss3 size={20} className='text-blue-500  min-w-[18px]' />, tag: 'CSS' },
				{ icon: <DiSass size={20} className='text-pink-500  min-w-[18px]' />, tag: 'SASS' },
				{ icon: <DiReact size={20} className='text-cyan-500  min-w-[18px]' />, tag: 'ReactJS' },
				{ icon: <DiJsBadge size={20} className='text-yellow-500  min-w-[18px]' />, tag: 'Javascript' },
				{
					icon: <img src="images/typescript-logo.svg" width={'18px'} height={'18px'} alt="logo of language typescript" />,
					tag: 'Typescript'
				},
				{ icon: <MdAspectRatio size={20} className='text-cyan-500 min-w-[18px]' />, tag: 'Responsive Design' }
			],
		},
		{
			type: 'Back End',
			typeIcon: <MdDns size={50} className='text-cyan-400' />,
			description: 'I like to code things from scratch, and enjoy bringing ideas in the browser',
			languagesTitle: 'Languages',
			languages: [
				{ icon: <DiJsBadge size={20} className='text-yellow-500  min-w-[18px]' />, tag: 'Javascript' },
				{ icon: <DiNodejsSmall size={20} className='text-green-500 min-w-[18px]' />, tag: 'NodeJS' },
				{ icon: <img src="images/kotlin-logo.svg" width={'18px'} height={'18px'} alt="logo of kotlin language" />, tag: 'Kotlin' }
			]
		},
		{
			type: 'Database',
			typeIcon: <MdBackup size={50} className='text-cyan-400' />,
			description: 'I know how to use Databases',
			languagesTitle: 'Languages',
			languages: [
				{ icon: <DiMysql size={20} className='text-blue-500 min-w-[18px]' />, tag: 'MySQL' },
				{ icon: <DiSqllite size={20} className='text-neutral-500 min-w-[18px]' />, tag: 'SQLite' },
				{ icon: <DiMongodb size={20} className='text-green-700 min-w-[18px]' />, tag: 'MongoDB' }
			]
		},
		{
			type: 'Dev Tools',
			typeIcon: <MdOutlineSettingsApplications size={50} className='text-cyan-400' />,
			description: 'Tools for a better productivity',
			languagesTitle: 'Tools',
			languages: [
				{ icon: <DiWindows className=' text-blue-500 min-w-[18px]' />, tag: 'Windows' },
				{ icon: <DiLinux className=' text-orange-400 min-w-[18px]' />, tag: 'Linux' },
				{ icon: <DiWindows className=' text-blue-500 min-w-[18px]' />, tag: 'Powershell' },
				{ icon: <DiLinux className=' text-orange-400 min-w-[18px]' />, tag: 'Bash' },
				{ icon: <DiVisualstudio className=' text-blue-700 min-w-[18px]' />, tag: 'VSCode' },
				{ icon: <DiIntellij className=' text-purple-800 min-w-[18px]' />, tag: 'IntelliJ' },
				{ icon: <DiNpm className=' text-pink-700 min-w-[18px]' />, tag: 'Npm' },
				{
					icon: <img src="images/vite-logo.svg" width={'18px'} height={'18px'} alt="logo of vite build tool" />,
					tag: 'Vite'
				},
				{
					icon: <img src="images/gradle-logo.svg" width={'18px'} height={'18px'} alt="logo of gradle build tool" />,
					tag: 'Gradle'
				},
				{ icon: <DiGit className=' text-orange-700 min-w-[20px]' />, tag: 'Git' },
				{ icon: <DiGithub className=' text-purple-200 min-w-[20px]' />, tag: 'Github' }
			]
		}
	]);

	const btnProjectsAll = useRef();
	const btnProjectsReact = useRef();
	const btnProjectsVanilla = useRef();

	// WARN: on each render empty [] is applied to projectAll => don't do that
	// let projectAll = [];

	useEffect(() => {
		const all = [
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/button-challenge.png',
				title: 'Button component',
				description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable button.',
				demoLink: 'https://button-component-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/button-component'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/input-challenge.png',
				title: 'Input component',
				description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable input.',
				demoLink: 'https://input-component-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/input-component'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/windbnb-challenge.png',
				title: 'WindBnB Challenge',
				description: 'Airbnb has a great UI, it so modern and clean.',
				demoLink: 'https://winbnb-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/windbnb'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/todo-challenge.png',
				title: 'Todo app',
				description: 'Todo app is one of the common projects when it comes to practicing coding',
				demoLink: 'https://todo-app-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/todo-app'
			},
			{
				type: 'vanilla',
				tags: ['HTML', 'CSS', 'RESPONSIVE'],
				image: 'images/challenges/edie-homepage.png',
				title: 'Edie Homepage',
				description: 'Homepage is a popular task that a developer has to do. In this challenge, I had to work with a given design and fullfil the user stories.',
				demoLink: 'https://edie-homepage-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/edit-homepage'
			},
			{
				type: 'vanilla',
				tags: ['HTML', 'CSS', 'RESPONSIVE'],
				image: 'images/challenges/checkout-page.png',
				title: 'Checkout Page',
				description: 'Checkout page use a minimal design and contains a form with differents inputs. In this challenge, I had to work with a given design and fullfil the user stories.',
				demoLink: 'https://my-checkout-page-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/my-checkout-page'
			},
			{
				type: 'vanilla',
				tags: ['HTML', 'CSS', 'RESPONSIVE'],
				image: 'images/challenges/my-gallery.png',
				title: 'My Gallery Page',
				description: 'Inspired by Instagram. In this challenge, I had to work with a similar design to instagram profile page.',
				demoLink: 'https://my-gallery-page-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/my-gallery-page'
			},
			{
				type: 'vanilla',
				tags: ['HTML', 'CSS', 'RESPONSIVE'],
				image: 'images/challenges/recipe-page.png',
				title: 'Recipe Page',
				description: 'Everyone loves food, especially cheesecake. In this project, I had to work with a given recipe and fullfil the user stories.',
				demoLink: 'https://recipe-page-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/recipe-page'
			},

		];

		setProjectsAll(all);
		setProjectsReact(all.filter(it => it.type.toLowerCase() === ProjectType.REACT));
		setProjectsVanilla(all.filter(it => it.type.toLowerCase() === ProjectType.VANILLA));
		setProjects(projectsAll);
		setTypeProject(ProjectType.ALL);
	}, []);

	useEffect(() => {
		if (typeProject === ProjectType.ALL) { setProjects(projectsAll); }
		if (typeProject === ProjectType.REACT) { setProjects(projectsReact); }
		if (typeProject === ProjectType.VANILLA) { setProjects(projectsVanilla); }
	}, [typeProject]);


	function handleBtnAllEvent(e) {
		e.preventDefault();

		btnProjectsReact.current.classList.remove('btn-shadow--active');
		btnProjectsVanilla.current.classList.remove('btn-shadow--active');
		btnProjectsAll.current.classList.add('btn-shadow--active');

		setTypeProject(ProjectType.ALL);
	}

	function handleBtnReactEvent(e) {
		e.preventDefault();

		btnProjectsAll.current.classList.remove('btn-shadow--active');
		btnProjectsVanilla.current.classList.remove('btn-shadow--active');
		btnProjectsReact.current.classList.add('btn-shadow--active');

		setTypeProject(ProjectType.REACT);
	}

	function handleBtnVanillaHTMLEvent(e) {
		e.preventDefault();

		btnProjectsAll.current.classList.remove('btn-shadow--active');
		btnProjectsReact.current.classList.remove('btn-shadow--active');
		btnProjectsVanilla.current.classList.add('btn-shadow--active');

		setTypeProject(ProjectType.VANILLA);
	}

	return (
		<div className="h-screen  mx-auto min-h-[3000px] bg-neutral-900 ">
			<header id='headerApp' className='flex items-center justify-between gap-4 min-h-[9vh] bg-neutral-900'>
				<a className='p-4 flex items-center gap-4 text-primary' href="/">
					<MdViewInAr size={25} />
					<h1 className='text-lg font-sans font-semibold text-primary'>Houssam Developer</h1>
				</a>
				<nav className='hidden md:flex right-0 text-primary font-sans font-medium gap-6 px-4'>
					<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#headerApp">Home</a>
					<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionAboutMe">About me</a>
					<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionProjects">Projects</a>
					<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
				</nav>
			</header>

			<BottomNav />

			<main>
				{/* HERO */}
				<section id='sectionHero' className='section-hero h-[91vh] text-white flex flex-col gap-8 justify-center  px-6 '>
					<h2 className='font-sans font-semibold text-2xl'>
						<span className='font-sans font-semibold text-2xl my-title'>Front</span> End Developer
					</h2>
					<p className='font-sans font-normal text-xl'>Self-motivated developer, who is willing to create outstanding UI applications. </p>
				</section>

				{/* ABOUT ME */}
				<div className='max-w-[1440px] mx-auto'>
					<section id='sectionAboutMe' className='container-layout-shifter-one text-white'>
						<div className='bg-neutral-800 flex flex-col xl:justify-center items-center gap-4 p-4 rounded w-full  border-[1px] border-neutral-500'>
							<div className='min-w-[190px]'>
								<div className='container-ratio-1-1'>
									<img className='rounded-full child-ratio' src="images/my-photo.png" alt="picture of developer" />
									{/* <img className='hidden rounded-full child-ratio object-top brightness-75'
								src="images/my-photo-miniature-he.jpg" alt="picture of developer"
							/> */}
								</div>
							</div>
							<div className='flex flex-col justify-center gap-1 max-w-xl'>
								<h2 className='font-sans text-xl font-semibold self-center'>Houssam Developer</h2>
								<h3 className='font-sans text-cyan-400 font-medium text-sm self-center'>FRONT END DEVELOPER</h3>
								<p className='p-6 text-md font-sans font-normal text-primary'>
									Bonjour, je m'appelle Houssam. Je suis un développeur Fullstack.<br />
									Avec mes competences, je sais concevoir et mettre en place des applications web.<br />
									Si vous cherchez un developpeur Back-end, Front-end ou FullStack, alors je saurai repondre à votre besoin.
									<br /> N'hésitez pas à me contacter pour définir votre besoin.
									<br /><br />
									A très bientôt
								</p>
							</div>
							<div>

							</div>
						</div>
						{/* ul is tracked as grid in layout-shifter */}
						<ul className='container-layout-grid-skills'>
							{skills.map(it =>
								<li className='container-box flex flex-col items-center gap-8 pt-8 border-[1px] border-neutral-500'>
									<div className='flex flex-col items-center gap-4'>
										{it.typeIcon}
										<h2 className='font-sans text-xl font-semibold text-cyan-400 '>{it.type}</h2>
									</div>

									<ul className='w-full flex flex-wrap justify-center gap-4'>
										{it.languages.map(itArg =>
											<li
												className='flex items-center gap-2 text-[12px] font-sans font-medium px-3 py-2 bg-neutral-700 rounded sm:text-sm'>{itArg.icon} <span>{itArg.tag}</span></li>)
										}
									</ul>

								</li>
							)
							}
						</ul>
					</section>


					{/* Hobbies backup */}
					<section className='p-4 text-primary'>
						<h2 className='text-2xl font-sans font-semibold mb-4'>Hobbies</h2>
						<ul className='container-layout-grid-four'>
							{hobbies.map(it =>
								<li key={uuidv4()} className=' flex flex-col gap-5 p-6 rounded bg-neutral-800 shadow  border-[1px] border-neutral-500'>
									<h3 className='font-medium text-xl'>{it.type}</h3>
									<div className='container-ratio-4-3'>
										<img className='child-ratio rounded-xl' src={it.image} alt="picture of hobbies" />
									</div>
									<p className='text-md flex-grow'>
										“{it.quote}”
									</p>
									<p className='text-md text-[#bbb]'>— {it.quoteAuthor}</p>
								</li>
							)
							}
						</ul>

					</section>

					<section id='sectionProjects' className='p-4 text-primary'>
						<h2 className='text-2xl font-sans font-semibold mb-4'>Projects</h2>
						<div className='flex gap-4 items-center py-4'>
							<button ref={btnProjectsAll} className='btn-shadow btn-shadow--active' onClick={handleBtnAllEvent}>All</button>
							<button ref={btnProjectsReact} className='btn-shadow' onClick={handleBtnReactEvent}>React</button>
							<button ref={btnProjectsVanilla} className='btn-shadow' onClick={handleBtnVanillaHTMLEvent}>Vanilla HTML</button>
						</div>

						<ul className='container-layout-grid-four-projects'>
							{
								projects.map(it =>
									<li key={uuidv4()} className='rounded p-6 bg-neutral-800 flex flex-col justify-between gap-4 border-[1px]
 border-neutral-500  hover:border-cyan-400 transition-[border]'>
										<div>
											<div className='container-ratio-4-3'>
												<img className='child-ratio object-left rounded'
													src={it.image} alt={`picture of project ${it.title}`} />
											</div>
											<ul className='flex gap-2 py-2 text-cyan-400'>
												{it.tags.map(tag => <li key={uuidv4()}>{`#${tag}`}</li>)}
											</ul>
										</div>
										<div className='pb-5 flex flex-col justify-start flex-grow'>
											<h3 className='font-semibold text-xl font-sans mb-2'>{it.title}</h3>
											<p className='text-md'>{it.description}</p>
										</div>

										<div className='flex gap-4'>
											<a className='btn-shadow' href={it.demoLink}>DEMO</a>
											<a className='btn-shadow' href={it.codeLink}>CODE</a>
										</div>
									</li>
								)
							}
						</ul>
					</section>
				</div>

			</main>

			<footer className=' bg-[#111] '>
				<div className='flex items-center justify-between p-4 max-w-[1024px] mx-auto min-h-[40vh] border-2 border-orange-300'>
					<nav className='flex flex-col right-0 text-primary font-sans font-medium gap-6 px-4'>
						<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#headerApp">Home</a>
						<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionAboutMe">About me</a>
						<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionProjects">Projects</a>
						<a className='pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
					</nav>
					<div className='text-primary'>
						<h2>Social network</h2>
						<div>
							<img src="" alt="" />
							<img src="" alt="" />
							<img src="" alt="" />
						</div>
					</div>
					<p className="text-primary text-center p-4 font-medium">created by <span className='font-bold'>houssam-developer</span> - devChallenges.io</p>
				</div>
			</footer>
		</div>
	)

	function BottomNav() {
		return (
			<nav className='md:hidden flex justify-evenly fixed bottom-1 left-1 right-1 z-10 py-2 m-1 rounded-xl text-white bg-nav'>
				<a href='#headerApp' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-900 p-2 hover:bg-neutral-900 '>
						<MdHome size={24} />
					</div>
					<span>Home</span>
				</a>
				<a href='#sectionAboutMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400 ' >
					<div className='rounded-full bg-neutral-900 hover:bg-neutral-900 p-2'>
						<MdPerson size={24} />
					</div>
					<span>About Me</span>
				</a>
				<a href='#sectionProjects' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-900 hover:bg-neutral-900 p-2'>
						<MdWeb size={24} />
					</div>
					<span>Projects</span>
				</a>
				<a href='#sectionContactMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-900 hover:bg-neutral-900 p-2'>
						<MdChat size={24} />
					</div>
					<span>Contact Me</span>
				</a>
			</nav>
		);
	}
}

export default App;
