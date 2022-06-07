
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
	MdEmail, MdPhone, MdViewInAr, MdHome, MdPerson, MdWork,
	MdOutlineCode, MdWeb, MdOutlineConstruction, MdContacts, MdChat, MdLaptop,
	MdOutlinePhonelink, MdDns, MdCode, MdOutlineSettingsApplications, MdBackup, MdOutlineExitToApp,
	MdAspectRatio, MdDevicesOther, MdFileDownload, MdSend, MdClear, MdKeyboardArrowUp, MdSubject
} from "react-icons/md";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import {
	DiCss3, DiJsBadge, DiHtml5, DiSass, DiReact, DiNodejs, DiNpm, DiIntellij, DiVisualstudio, DiWindows,
	DiLinux, DiGithub, DiGit, DiResponsive, DiNodejsSmall, DiMysql, DiSqllite, DiMongodb, DiDebian, DiJava

} from "react-icons/di";
import './App.scss';
import { v4 as uuidv4 } from 'uuid';

const ProjectType = {
	ALL: 'all',
	REACT: 'react',
	VANILLA: 'vanilla'
};


const CV_NAME = 'CV_Houssam_El_atmani_Developpeur_FrontEnd_React_Rabat.pdf';

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
				{ icon: <MdDevicesOther size={20} className='text-cyan-500 min-w-[18px]' />, tag: 'Responsive Design' }
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
				{ icon: <img src="images/kotlin-logo.svg" width={'18px'} height={'18px'} alt="logo of kotlin language" />, tag: 'Kotlin' },
				{ icon: <DiJava size={20} className='text-[#026d8e]' />, tag: 'Java' }
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
				{ icon: <DiDebian className=' text-slate-800 min-w-[18px]' />, tag: 'Linux' },
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
				{ icon: <FaGithub className=' text-purple-200 min-w-[20px]' />, tag: 'Github' }
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
				image: 'images/challenges/windbnb.png',
				title: 'WindBnB Challenge',
				description: 'Airbnb has a great UI, it so modern and clean.',
				demoLink: 'https://winbnb-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/windbnb'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/todo-app.png',
				title: 'Todo App',
				description: 'Todo app is one of the common projects when it comes to practicing coding',
				demoLink: 'https://todo-app-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/todo-app'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons', 'Tailwind'],
				image: 'images/challenges/country-quiz.png',
				title: 'Country Quiz',
				description: 'Quiz about countries and flags using restcountries.com as an API',
				demoLink: 'https://country-quiz-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/country-quiz'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/my-button.png',
				title: 'Button component',
				description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable button.',
				demoLink: 'https://button-component-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/button-component'
			},
			{
				type: 'React',
				tags: ['React', 'React-Icons'],
				image: 'images/challenges/my-input.png',
				title: 'Input component',
				description: 'One of the best ways to learn front-end libraries is to create a reusable component. My task was to to create a reusable input.',
				demoLink: 'https://input-component-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/input-component'
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
				image: 'images/challenges/my-checkout.png',
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
				image: 'images/challenges/my-recipe.png',
				title: 'Recipe Page',
				description: 'Everyone loves food, especially cheesecake. In this project, I had to work with a given recipe and fullfil the user stories.',
				demoLink: 'https://recipe-page-he.netlify.app/',
				codeLink: 'https://github.com/houssam-developer/recipe-page'
			},

		];

		setProjectsAll(all);
		setProjectsReact(all.filter(it => it.type.toLowerCase() === ProjectType.REACT));
		setProjectsVanilla(all.filter(it => it.type.toLowerCase() === ProjectType.VANILLA));
		setProjects(projectsReact);
		setTypeProject(ProjectType.REACT);
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

	function handleFormContactSubmitEvent(e) {
		e.preventDefault();
		console.log('FormContact [submit]');

		emailjs.sendForm('service_9s9jrt6', 'template_znu5or3', e.target, 'X_VMHh7poUMyeIkkS')
			.then((result) => {
				console.log(result.text);
			}, (error) => {
				console.log(error.text);
			});
		e.target.reset();
	}

	return (
		<div className="h-screen mx-auto bg-neutral-800 ">
			<div className='hidden md:block relative'>
				<a href='#headerApp' className='absolute bottom-4 right-4 p-4 text-white hover:text-cyan-400' >
					<div className='fixed bottom-4 right-4 btn-top'>
						<MdKeyboardArrowUp size={24} />
					</div>
				</a>
			</div>
			<header id='headerApp' className='flex items-center justify-between gap-4 min-h-[9vh] bg-neutral-800'>
				<a className='p-4 flex items-center gap-4 text-primary ' href="/">
					<MdViewInAr size={25} />
					<h1 className='text-lg font-sans font-semibold text-primary'>Houssam EL ATMANI</h1>
				</a>
				<nav className='hidden md:flex right-0 text-primary font-sans font-medium gap-6 px-4'>
					<a className='transition-[border] pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#headerApp">Home</a>
					<a className='transition-[border] pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionAboutMe">About me</a>
					<a className='transition-[border] pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionProjects">Projects</a>
					<a className='transition-[border] pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
				</nav>
			</header>

			<BottomNav />

			<section id='sectionHero' className='flex flex-col section-hero h-[91vh] text-white'>
				<div className='flex-grow flex justify-center items-center gap-8 '>
					<a download={`${CV_NAME}`} href={`myfiles/${CV_NAME}`} className='btn-shadow flex items-center gap-2 bg-neutral-600 text-white hover:text-cyan-300'>
						<MdFileDownload size={20} />
						<span>Download CV</span>
					</a>
					<div>|</div>
					<nav className='flex justify-center items-center gap-4'>
						<a className='transition-[padding] hover:pb-2' target="_blank" href="https://github.com/houssam-developer"><FaGithub size={30} /></a>
						<a className='transition-[padding] hover:pb-2' target="_blank" href="https://www.linkedin.com/in/houssam-elatmani-651308219"><FaLinkedin size={30} /></a>
						<a className='transition-[padding] hover:pb-2' target="_blank" href="https://devchallenges.io/portfolio/houssam-developer">
							<img src="images/devchallenges.png" alt="logo of devchallenges" width={'30px'} height={'30px'} />
						</a>
					</nav>
				</div>
				<div className='flex-grow flex flex-col gap-8  px-6'>
					<h2 className='font-sans font-semibold text-2xl'>
						<span className='font-sans font-semibold text-2xl my-title'>Front</span> End Developer
					</h2>
					<p className='font-sans font-normal text-xl'>Self-motivated developer, who is willing to create outstanding UI applications. </p>
				</div>
			</section>
			<main className='max-w-[1440px] mx-auto flex flex-col gap-12 py-12'>
				<section id='sectionAboutMe' className='p-4 text-primary'>
					<h2 className='text-2xl font-sans font-semibold mb-4'>About Me</h2>
					<div className='container-layout-shifter-one '>
						<div className='bg-neutral-700 flex flex-col xl:justify-center items-center gap-4 p-4 rounded w-full shadow'>
							<div className='min-w-[190px]'>
								<div className='container-ratio-1-1'>
									<img className='rounded-full child-ratio brightness-75 object-top'
										src="images/my-photo-he.jpg" alt="picture of developer"
									/>
								</div>
							</div>
							<div className='flex flex-col justify-center gap-1 max-w-xl'>
								<h2 className='font-sans text-xl font-semibold self-center'>Houssam EL ATMANI</h2>
								<h3 className='font-sans text-cyan-400 font-medium text-sm self-center'>FRONT END DEVELOPER</h3>
								<p className='p-6 text-md font-sans font-normal text-primary'>
									Hi, my name is Houssam. I am a Front-End developer.<br />
									I got multiple skills and I am a self taught developer <br />
									I can help you build your web application.<br />
								</p>
							</div>
							<div>

							</div>
						</div>
						{/* ul is tracked as grid in layout-shifter */}
						<ul className='container-layout-grid-skills'>
							{skills.map(it =>
								<li key={uuidv4()} className='container-box flex flex-col items-center gap-8 pt-8 shadow  bg-neutral-700'>
									<div className='flex flex-col items-center gap-4'>
										{it.typeIcon}
										<h2 className='font-sans text-xl font-semibold text-cyan-400 '>{it.type}</h2>
									</div>

									<ul className='w-full flex flex-wrap justify-center gap-4'>
										{it.languages.map(itArg =>
											<li key={uuidv4()}
												className='flex items-center gap-2 text-[12px] font-sans font-medium px-3 py-2 shadow bg-neutral-600 rounded sm:text-sm'>{itArg.icon} <span>{itArg.tag}</span></li>)
										}
									</ul>

								</li>
							)
							}
						</ul>
					</div>
				</section>
				<section id='sectionProjects' className='p-4 text-primary'>
					<h2 className='text-2xl font-sans font-semibold mb-4'>Projects</h2>
					<div className='flex gap-4 items-center py-4'>
						<button ref={btnProjectsAll} className='btn-shadow' onClick={handleBtnAllEvent}>All</button>
						<button ref={btnProjectsReact} className='btn-shadow  btn-shadow--active' onClick={handleBtnReactEvent}>React</button>
						<button ref={btnProjectsVanilla} className='btn-shadow' onClick={handleBtnVanillaHTMLEvent}>Vanilla Web</button>
					</div>

					<ul className='container-layout-grid-four-projects py-5 z-0'>
						{
							projects.map(it =>
								<li key={uuidv4()}
									className='shadow rounded p-6 bg-neutral-700 flex flex-col justify-between gap-4 border-[1px]
 										border-transparent  hover:border-cyan-400 transition-[border]'>
									<div>
										<div className='container-ratio-4-3 z-0'>
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

									<div className='flex gap-6 self-center'>
										<a className='btn-shadow flex items-center gap-3 ' target="_blank" href={it.demoLink}>
											<MdOutlineExitToApp size={20} />
											<span>Demo</span>
										</a>
										<a className='btn-shadow flex items-center gap-3' target="_blank" href={it.codeLink}>
											<FaGithub size={20} />
											<span>Code</span>
										</a>
									</div>
								</li>
							)
						}
					</ul>
				</section>

				<section id='sectionContactMe' className='p-4 text-primary'>
					<h2 className='text-2xl font-sans font-semibold mb-8'>Contact Me</h2>
					<form onSubmit={handleFormContactSubmitEvent} className='flex flex-col text-white gap-8 max-w-[400px] md:max-w-[500px] mx-auto bg-neutral-700 rounded p-4 sm:p-8'>
						<div className='flex flex-col gap-2 focus-within:text-cyan-400'>
							<label htmlFor="tagName">Your Name</label>
							<div className='flex items-center gap-2 p-2 border-[1px] border-neutral-300 rounded transit focus-within:border-cyan-300'>
								<MdPerson size={20} className='min-w-max' />
								<input type="text" id='tagName' name='name' />
							</div>
						</div>
						<div className='flex flex-col gap-1 focus-within:text-cyan-400'>
							<label htmlFor="tagEmail">Your Email</label>
							<div className='flex items-center gap-2 p-2 border-[1px] border-neutral-300 rounded focus-within:border-cyan-300'>
								<MdEmail size={20} className='min-w-max' />
								<input type="email" id='tagEmail' name='email' required />
							</div>
						</div>
						<div className='flex flex-col gap-1 focus-within:text-cyan-400'>
							<label htmlFor="tagSubject">Subject</label>
							<div className='flex items-center gap-2 p-2 border-[1px] border-neutral-300 rounded focus-within:border-cyan-300'>
								<MdSubject size={20} className='min-w-max' />
								<input type="text" id='tagSubject' name='subject' />
							</div>
						</div>
						<div className='flex flex-col gap-1 focus-within:text-cyan-400'>
							<label htmlFor="tagMessage">Your Message</label>
							<div className='flex items-center gap-2 p-2 border-[1px] border-neutral-300 rounded focus-within:border-cyan-300'>
								<textarea id='tagMessage' rows={'5'} name='message' />
							</div>
						</div>
						<div className='flex gap-8 justify-between'>
							<button type='reset' className='btn-shadow text-white  self-center flex items-center gap-3'>
								<MdClear size={20} />
								<span>Clear</span>
							</button>
							<button type='submit' className='btn-shadow btn-shadow--email text-white bg-cyan-500 self-center flex items-center gap-3'>
								<MdSend size={20} />
								<span>Send</span>
							</button>
						</div>
					</form>
				</section>
			</main>

			<footer className=' bg-[#111] py-8'>
				<div className='flex flex-col md:flex-row md:justify-between gap-4 items-center p-4 max-w-[1024px] mx-auto min-h-[40vh] '>

					<nav className='hidden md:flex text-sm md:flex-col md:text-md right-0 text-primary font-sans font-medium gap-6 px-4'>
						<a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#headerApp">Home</a>
						<a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionAboutMe">About me</a>
						<a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionProjects">Projects</a>
						<a className='transition-[border] max-w-max pb-1 border-b-2 border-transparent hover:text-white hover:border-cyan-400' href="#sectionContactMe">Contact me</a>
					</nav>

					<div className='flex flex-col gap-2 text-primary'>
						<div className='flex items-center gap-4 p-4'>
							<a className='transition-[padding] md:hover:pb-2' target="_blank" href="https://github.com/houssam-developer"><FaGithub size={30} /></a>
							<a className='transition-[padding] md:hover:pb-2' target="_blank" href="https://www.linkedin.com/in/houssam-elatmani-651308219"><FaLinkedin size={30} /></a>
							<a className='transition-[padding] md:hover:pb-2' target="_blank" href="https://devchallenges.io/portfolio/houssam-developer">
								<img src="images/devchallenges.png" alt="logo of devchallenges" width={'30px'} height={'30px'} />
							</a>
						</div>
					</div>

					<p className="text-primary text-center p-4 font-medium">created by <span className='font-medium text-cyan-200'>houssam-developer</span> - devChallenges.io</p>

				</div>
			</footer>
		</div>
	)

	function BottomNav() {
		return (
			<nav className='md:hidden flex justify-evenly fixed bottom-1 left-1 right-1 z-50 py-2 m-1 rounded-xl text-white bg-nav'>
				<a href='#headerApp' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-800 p-2 hover:bg-neutral-800 '>
						<MdHome size={24} />
					</div>
					<span>Home</span>
				</a>
				<a href='#sectionAboutMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400 ' >
					<div className='rounded-full bg-neutral-800 hover:bg-neutral-800 p-2'>
						<MdPerson size={24} />
					</div>
					<span>About Me</span>
				</a>
				<a href='#sectionProjects' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-800 hover:bg-neutral-800 p-2'>
						<MdWeb size={24} />
					</div>
					<span>Projects</span>
				</a>
				<a href='#sectionContactMe' className='flex flex-col items-center gap-1 text-xs font-sans font-medium text-white hover:text-cyan-400' >
					<div className='rounded-full bg-neutral-800 hover:bg-neutral-800 p-2'>
						<MdChat size={24} />
					</div>
					<span>Contact Me</span>
				</a>
			</nav>
		);
	}
}

export default App;
