import { motion } from 'framer-motion'

import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import { slideInFromBottom } from '../animation'

const HeroSection = () => {
	return (
		<section
			id='homepage'
			className='flex h-[65vh] md:h-screen items-center justify-center'>
			<div
				className='grid grid-cols-4 grid-rows-4 
			relative top-8 md:top-0 h-full w-full overflow-hidden'>
				<video
					muted
					autoPlay
					playsInline
					loop
					src={video}
					className='col-start-1 col-span-4 row-start-1 row-span-4 
					h-full w-full object-cover'></video>

				<motion.div
					initial='hidden'
					animate='visible'
					viewport={{ once: true }}
					variants={slideInFromBottom(0.8)}
					className='col-start-1 col-span-4 row-start-3 row-span-4'>
					<div className='flex flex-col justify-end mb-16'>
						<img
							src={logo}
							alt='restaura'
							className='w-full md:w-[65%] mx-auto px-4'
						/>
						<p className='text-lg tracking-tighter text-white text-center py-4'>
							Paris
						</p>
					</div>
				</motion.div>

				<div
					className='col-start-1 col-span-4 row-start-4 row-span-4 
				z-10 bg-gradient-to-b from-transparent from-20% to-black 
				h-full top-8 md:top-0'></div>
			</div>
		</section>
	)
}

export default HeroSection
