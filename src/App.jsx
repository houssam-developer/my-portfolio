
import { useEffect, useRef, useState } from 'react';
import { MdEmail, MdPhone } from "react-icons/md";

function App() {

	return (
		<div className="h-screen max-w-[1024px] mx-auto border-2 border-orange-300">

			<section className="container-box flex flex-col sm:flex-row gap-4 sm:max-w-full sm:justify-between">
				<div className=' min-w-[200px] max-w-[320px] '>
					<div className='container-ratio-square'>
						<img className=' rounded-xl child-ratio' src="src/images/my-photo.png" alt="" />
					</div>
				</div>
				<div className=' flex flex-col gap-6 '>
					<div className='flex flex-col gap-4 sm:flex-row sm:justify-between'>
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
			</section>



		</div>
	)
}

export default App;
