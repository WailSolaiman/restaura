import { motion } from 'framer-motion'

import poster from '../assets/hero.jpg'
import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import { slideInFromBottom } from '../animation'

const HeroSection = () => {
	return (
		<section
			id='homepage'
			className='flex h-[65vh] md:h-screen items-center justify-center'>
			<div
				className='grid grid-cols-6 grid-rows-6 
			relative top-8 md:top-0 h-full w-full overflow-hidden'>
				<video
					muted
					autoPlay
					playsInline
					loop
					poster={poster}
					className='col-start-1 col-span-6 row-start-1 row-span-6 
					h-full w-full object-cover'>
					<source src={video} type='video/mp4' />
				</video>

				<motion.div
					initial='hidden'
					animate='visible'
					viewport={{ once: true }}
					variants={slideInFromBottom(0.8)}
					className='col-start-1 col-span-6 row-start-5 row-span-6'>
					<div className='flex flex-col justify-end'>
						<img
							src={logo}
							alt='restaura'
							className='w-full md:w-[55%] mx-auto px-4'
						/>
						<p className='text-lg tracking-tighter text-white text-center py-4'>
							Paris
						</p>
					</div>
				</motion.div>

				<div
					className='col-start-1 col-span-6 row-start-6 row-span-6 
				z-10 bg-gradient-to-b from-transparent from-20% to-black 
				h-full top-8 md:top-0'></div>
			</div>
		</section>
	)
}

export default HeroSection
