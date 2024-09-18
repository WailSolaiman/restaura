import { motion } from 'framer-motion'

import { CONTACT } from '../constants'
import { staggerContainer, fadeInWithStagger } from '../animation'

const Contact = () => {
	return (
		<section id='contact' className='container mx-auto py-16'>
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
		</section>
	)
}

export default Contact
