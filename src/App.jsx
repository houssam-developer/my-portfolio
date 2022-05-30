
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

function App() {

	return (
		<div className="h-screen  mx-auto min-h-[3000px] bg-neutral-900 ">

			{/* === PROFIL === */}

			{/* <section className="container-box flex flex-col sm:flex-row gap-6 sm:max-w-full sm:justify-between">
				<div className=' min-w-[200px] max-w-[250px]'>
					<div className='container-ratio-square'>
						<img className=' rounded-xl child-ratio' src="src/images/my-photo.png" alt="" />
					</div>
				</div>
				<div className=' flex flex-col gap-6 '>
					<div className='flex flex-col gap-6 sm:flex-row sm:justify-between'>
						<div>
							<h1 className='font-sans font-semibold text-2xl text-[#4f4f4f]'>Billy Pearson</h1>
							<span className='font-sans font-medium text-lg text-[#828282]'>Front-end developer</span>
						</div>
						<div>
							<div className='flex items-center gap-2'>
								<MdEmail fill='#828282' size={24} />
								<span className='font-sans font-medium text-lg text-[#828282]'>billy@example.com</span>
							</div>
							<div className='flex items-center gap-2'>
								<MdPhone fill='#828282' size={24} />
								<span className='font-sans font-medium text-lg text-[#828282]'>(+603) 546 624 342</span>
							</div>
						</div>
					</div>
					<div className='font-sans font-medium text-lg text-[#828282]'>
						Self-motivated developer, who is willing to learn and create outstanding UI applications.
						Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
					</div>
				</div>
			</section> */}

			{/* === FRONT END PROGRESS BARS === */}

			<header id='headerApp' className='flex items-center justify-between gap-4 min-h-[7vh] bg-neutral-900'>
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

			{/* HERO */}
			<section id='sectionHero' className='section-hero h-[93vh] text-white flex flex-col gap-8 justify-center  px-6 '>
				<h2 className='font-sans font-semibold text-2xl'>
					<span className='font-sans font-semibold text-2xl my-title'>Front</span> End Developer
				</h2>
				<p className='font-sans font-normal text-xl'>Self-motivated developer, who is willing to create outstanding UI applications. </p>
			</section>

			{/* ABOUT ME */}

			<section className='container-layout-shifter text-white'>
				<div className='bg-neutral-800 flex flex-col items-center gap-4 p-4 rounded'>
					<div className='min-w-[190px] max-w-[200px]'>
						<div className='container-ratio-1-1'>
							<img className='rounded-full child-ratio' src="src/images/my-photo.png" alt="picture of developer" />
							<img className='hidden rounded-full child-ratio object-top brightness-75'
								src="src/images/my-photo-miniature-he.jpg" alt="picture of developer"
							/>
						</div>
					</div>
					<div className='flex flex-col gap-1 max-w-xl'>
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
				</div>
				<div>
					<div className='container-box flex flex-col items-center gap-4'>
						<MdOutlinePhonelink size={50} className='text-cyan-400' />
						<h2 className='font-sans text-xl font-semibold text-cyan-400'>Front End</h2>
						<p className='text-md font-sans font-normal text-primary flex self-start min-h-[10vh]'>I like to code things from scratch, and enjoy bringing ideas in the browser</p>
						<h3 className='font-sans text-cyan-400 font-medium text-sm'>Languages</h3>
						{/* <ul className='flex flex-col items-center gap-3 w-full'> */}
						<ul className='w-full container-layout-small-grid'>
							<li className='flex gap-2 text-sm'><DiHtml5 size={20} className='text-red-500' /> <span>HTML</span></li>
							<li className='flex gap-2 text-sm'><DiCss3 size={20} className='text-blue-500' /> <span>CSS</span></li>
							<li className='flex gap-2 text-sm'><DiSass size={20} className='text-pink-500' /> <span>SASS</span></li>
							<li className='flex gap-2 text-sm'><DiJsBadge size={20} className='text-yellow-500' /> <span>Javascript</span></li>
							<li className='flex gap-2 text-sm'><DiReact size={20} className='text-cyan-500' /> <span>ReactJS</span></li>
							<li className='flex gap-2 text-sm'><MdAspectRatio size={20} className='text-cyan-500' /> <span>Responsive Design</span></li>
						</ul>
					</div>
					<div className='container-box  flex flex-col  items-center gap-4'>
						<MdDns size={50} className='text-cyan-400' />
						<h2 className='font-sans text-xl font-semibold text-cyan-400 '>Back End</h2>
						<p className='text-md font-sans font-normal text-primary min-h-[10vh]'>I also like brigings ideas as set of steps</p>
						<h3 className='font-sans text-cyan-400 font-medium text-sm'>Languages</h3>
						<ul className='w-full container-layout-small-grid'>
							<li className='flex gap-2 text-sm'><DiJsBadge size={20} className='text-yellow-500' /> <span>Javascript</span></li>
							<li className='flex gap-2 text-sm'><DiNodejsSmall size={20} className='text-green-500' /> <span>NodeJS</span></li>
							<li className='flex gap-2 text-sm'>
								<img src="src/images/kotlin-logo.svg" width={'18px'} height={'18px'} alt="logo of kotlin language" />
								<span>Kotlin</span>
							</li>
						</ul>
					</div>
					<div className='container-box  flex flex-col  items-center gap-4'>
						<MdBackup size={50} className='text-cyan-400' />
						<h2 className='font-sans text-xl font-semibold text-cyan-400 '>Database</h2>
						<h3 className='font-sans text-cyan-400 font-medium text-sm'>Languages</h3>
						<ul className='w-full container-layout-small-grid'>
							<li className='flex gap-2 text-sm'><DiJsBadge size={20} className='text-yellow-500' /> <span>SQL</span></li>
							<li className='flex gap-2 text-sm'><DiNodejsSmall size={20} className='text-green-500' /> <span>NodeJS</span></li>
							<li className='flex gap-2 text-sm'>
								<img src="src/images/kotlin-logo.svg" width={'18px'} height={'18px'} alt="logo of kotlin language" />
								<span>Kotlin</span>
							</li>
						</ul>
					</div>
					<div className='container-box  flex flex-col items-center gap-4'>
						<MdBackup size={50} className='text-cyan-400' />
						<h2>Database</h2>
						<h3>Languages</h3>
						<ul className='w-full container-layout-small-grid'>
							<li className='flex gap-2 text-sm'><DiMysql size={20} className='text-blue-500' /> <span>MySQL</span></li>
							<li className='flex gap-2 text-sm'><DiSqllite size={20} className='text-neutral-500' /> <span>SQLite</span></li>
							<li className='flex gap-2 text-sm'><DiMongodb size={20} className='text-green-700' /> <span>MongoDB</span></li>

						</ul>
					</div>
					<div className='container-box  flex flex-col items-center gap-4'>
						<MdOutlineSettingsApplications size={50} className='text-cyan-400' />
						<h2>Dev Tools</h2>
						<h3>Languages</h3>
						<ul>
							<li>Windows / Linux</li>
							<li>Bash / Powersell</li>
							<li>VsCode / IntelliJ</li>
							<li>Npm / Maven / Gradle</li>
							<li>Git / Github</li>
						</ul>
					</div>

				</div>
			</section>

			<section className='container-layout-grid-four'>


			</section>


			{/* Hobbies backup */}
			<section>
				{/* Coding */}
				<div className=' flex flex-col gap-5 p-6 rounded bg-neutral-800 shadow'>
					<h3 className='font-medium text-xl'>Coding</h3>
					<div className='container-ratio-4-3 max-w-full'>
						<img className='child-ratio rounded-xl' src="src/images/coding.jpg" alt="picture of walking man" />
					</div>
					<p className='text-md'>
						“Make it work, make it right, make it fast.”
					</p>
					<p className='text-md text-[#bbb]'>— Kent Beck</p>
				</div>
				{/* Reading */}
				<div className=' flex flex-col gap-5 p-6 rounded bg-neutral-800 shadow'>
					<h3 className='font-medium text-xl'>Reading</h3>
					<div className='container-ratio-4-3 max-w-full'>
						<img className='child-ratio rounded-xl' src="src/images/reading.jpg" alt="picture of book and cup of coffe" />
					</div>
					<p className='text-md'>
						“The more that you read, the more things you will know. The more that you learn, the more places you’ll go.”
					</p>
					<p className='text-md text-[#bbb]'>— Dr. Seuss</p>
				</div>
				{/* Walking */}
				<div className=' flex flex-col gap-5 p-6 rounded bg-neutral-800 shadow'>
					<h3 className='font-medium text-xl'>Walking</h3>
					<div className='container-ratio-4-3 max-w-full'>
						<img className='child-ratio rounded-xl' src="src/images/walking.jpg" alt="picture of walking man" />
					</div>
					<p className='text-md'>
						“There is no habit you will value so much as that of walking far without fatigue.”
					</p>
					<p className='text-md text-[#bbb]'>— Thomas Jefferson</p>
				</div>

				{/* Gaming */}
				<div className=' flex flex-col gap-5 p-6 rounded bg-neutral-800 shadow'>
					<h3 className='font-medium text-xl'>Gaming</h3>
					<div className='container-ratio-4-3 max-w-full'>
						<img className='child-ratio rounded-xl' src="src/images/gaming.jpg" alt="picture of walking man" />
					</div>
					<p className='text-md'>
						“Gaming brings people together.”
					</p>
					<p className='text-md text-[#bbb]'>— Lisa Su.</p>
				</div>

			</section>

			{/* <section className='flex flex-wrap gap-4'>
				<div className='min-w-[250px] flex-grow-2 flex-col gap-4 bg-zinc-400'>
					<div className='min-h-[300px] bg-cyan-600  w-full'>developper</div>
					<div className='min-h-[300px] bg-purple-500  w-full'>skills</div>
				</div>
				<div className='flex-grow min-h-[300px] min-w-[250px] bg-orange-200'>hobbies</div>
			</section> */}






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
