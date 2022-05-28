
import { useEffect, useRef, useState } from 'react';
import { MdEmail, MdPhone, MdViewInAr, MdHome, MdPerson, MdWork, MdOutlineCode, MdWeb, MdOutlineConstruction, MdContacts, MdChat } from "react-icons/md";

function App() {

	return (
		<div className="h-screen max-w-[1024px] mx-auto min-h-[3000px] border-2 border-red-300">

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

			<header className='flex items-center justify-between gap-4 border-2 border-orange-400 '>
				<a href=""><MdViewInAr /></a>
				<nav className='hidden'>
					<a href="#">Home</a>
					<a href="#">About Me</a>
					<a href="#">Projects</a>
					<a href="#">Contact Me</a>
				</nav>
			</header>

			{/*  MdHome, MdPerson, MdWork, MdOutlineCode, MdOutlineConstruction */}
			<nav className='flex justify-evenly fixed bottom-0 left-0 right-0 bg-slate-500 py-2 m-1 rounded-xl'>
				<a className='flex flex-col items-center gap-2 text-xs font-sans font-bold ' href="#">
					<div className='rounded-full bg-blue-300 p-2'>
						<MdHome size={24} />
					</div>
					<span>Home</span>
				</a>
				<a className='flex flex-col items-center gap-2 text-xs font-sans font-bold ' href="#">
					<div className='rounded-full bg-blue-300 p-2'>
						<MdPerson size={24} />
					</div>
					<span>About Me</span>
				</a>
				<a className='flex flex-col items-center gap-2 text-xs font-sans font-bold ' href="#">
					<div className='rounded-full bg-blue-300 p-2'>
						<MdOutlineConstruction size={24} />
					</div>
					<span>Projects</span>
				</a>
				<a className='flex flex-col items-center gap-2 text-xs font-sans font-bold ' href="#">
					<div className='rounded-full bg-blue-300 p-2'>
						<MdChat size={24} />
					</div>
					<span>Contact Me</span>
				</a>
			</nav>


		</div>
	)
}

export default App;
