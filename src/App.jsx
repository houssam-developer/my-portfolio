
import { useEffect, useRef, useState } from 'react';
import { MdEmail, MdPhone, MdViewInAr, MdHome, MdPerson, MdWork, MdOutlineCode, MdWeb, MdOutlineConstruction, MdContacts, MdChat } from "react-icons/md";

function App() {

	return (
		<div className="h-screen  mx-auto min-h-[3000px] bg-slate-900 ">

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

			<header className='flex items-center justify-between gap-4 min-h-[7vh]'>
				<a className='p-4 flex items-center gap-4 text-primary' href="">
					<MdViewInAr size={25} />
					<h1 className='text-lg font-sans font-semibold text-primary'>Houssam Developer</h1>
				</a>
				<nav className='hidden'>
					<a href="#">Home</a>
					<a href="#">About Me</a>
					<a href="#">Projects</a>
					<a href="#">Contact Me</a>
				</nav>
			</header>

			<BottomNav />

			{/* HERO */}
			<section className='section-hero h-[93vh] text-white flex flex-col gap-8 justify-center  px-6 '>
				<h2 className='font-sans font-semibold text-2xl'>
					<span className='font-sans font-semibold text-2xl my-title'>Front</span> End Developer
				</h2>
				<p className='font-sans font-normal text-xl'>Self-motivated developer, who is willing to create outstanding UI applications. </p>
			</section>

			{/* ABOUT ME */}

		</div>
	)

	function BottomNav() {
		return (
			<nav className='md:hidden flex justify-evenly fixed bottom-0 left-0 right-0 z-10 bg-slate-800 opacity-90 py-2 m-1 rounded-xl text-white'>
				<a className='flex flex-col items-center gap-1 text-xs font-sans font-bold text-white hover:text-blue-400' href="#">
					<div className='rounded-full bg-gray-900 p-2 hover:bg-slate-900'>
						<MdHome size={24} />
					</div>
					<span>Home</span>
				</a>
				<a className='flex flex-col items-center gap-1 text-xs font-sans font-bold text-white hover:text-blue-400 ' href="#">
					<div className='rounded-full bg-gray-900 hover:bg-slate-900 p-2'>
						<MdPerson size={24} />
					</div>
					<span>About Me</span>
				</a>
				<a className='flex flex-col items-center gap-1 text-xs font-sans font-bold text-white hover:text-blue-400' href="#">
					<div className='rounded-full bg-gray-900 hover:bg-slate-900 p-2'>
						<MdWeb size={24} />
					</div>
					<span>Projects</span>
				</a>
				<a className='flex flex-col items-center gap-1 text-xs font-sans font-bold text-white hover:text-blue-400' href="#">
					<div className='rounded-full bg-gray-900 hover:bg-slate-900 p-2'>
						<MdChat size={24} />
					</div>
					<span>Contact Me</span>
				</a>
			</nav>
		);
	}
}

export default App;
