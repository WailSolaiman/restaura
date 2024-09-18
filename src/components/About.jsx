import { motion } from 'framer-motion'

import { ABOUT } from '../constants'
import about from '../assets/about.jpeg'
import { fadeInOut, slideInFromLeft } from '../animation'

const About = () => {
	return (
		<section id='about' className='container mx-auto mb-8'>
			<h2 className='mb-8 text-center text-3xl tracking-tighter lg:text-4xl'>
				About Us
			</h2>
			<div className='flex flex-wrap'>
				<div className='w-full p-4 lg:w-1/2'>
					<motion.img
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={slideInFromLeft(0.5)}
						src={about}
						alt='about-us'
						className='rounded-3xl lg:rotate-3'
					/>
				</div>
				<div className='w-full px-2 lg:w-1/2'>
					<motion.h2
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInOut(0.7)}
						className='text-4xl tracking-tighter lg:text-6xl'>
						{ABOUT.header}
					</motion.h2>
					<motion.div
						className='mb-8 mt-1 h-2 w-36 bg-rose-300 lg:rotate-3'
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInOut(1)}></motion.div>
					<motion.p
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInOut(1.2)}
						className='m-8 text-2xl lg:text-4xl leading-relaxed tracking-tight lg:max-w-xl'>
						{ABOUT.content}
					</motion.p>
				</div>
			</div>
		</section>
	)
}

export default About
