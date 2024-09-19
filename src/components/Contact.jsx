import { motion } from 'framer-motion'

import video from '../assets/contact-bg.mp4'
import { CONTACT } from '../constants'
import { staggerContainer, fadeInWithStagger } from '../animation'

const Contact = () => {
	return (
		<section id='contact'>
			<div className='grid grid-cols-6 grid-rows-6 pt-16 relative overflow-hidden'>
				<video
					muted
					autoPlay
					playsInline
					loop
					className='col-start-1 col-span-6 row-start-1 row-span-6 h-full w-full hidden lg:block'>
					<source src={video} type='video/mp4' />
				</video>

				<div className='col-start-2 col-span-4 row-start-2 row-span-4 z-20'>
					<h2 className='mb-8 text-center text-3xl lg:text-4xl'>
						Contact Us
					</h2>
					<motion.div
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={staggerContainer(0.7)}
						className='text-neutral-400'>
						{CONTACT.map((detail) => (
							<div key={detail.key}>
								<motion.p
									variants={fadeInWithStagger(0.5)}
									className='my-20 text-center text-2xl tracking-tighter lg:text-3xl'>
									{detail.value}
								</motion.p>
								<hr className='border-dashed border-neutral-700' />
							</div>
						))}
					</motion.div>
				</div>
				<div className='col-start-1 col-span-6 row-start-1 row-span-6 z-10 h-full bg-black/95'></div>
			</div>
		</section>
	)
}

export default Contact
