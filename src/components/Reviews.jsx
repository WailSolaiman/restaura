import { motion } from 'framer-motion'

import { REVIEW } from '../constants'
import xaviour from '../assets/xaviour.jpeg'
import customer1 from '../assets/customer1.jpeg'
import customer2 from '../assets/customer2.jpeg'
import customer3 from '../assets/customer3.jpeg'
import { staggerContainer, fadeInWithStagger, fadeInOut } from '../animation'

const Reviews = () => {
	return (
		<section id='review' className='container mx-auto mt-12 px-2'>
			<motion.div
				initial='hidden'
				whileInView='visible'
				viewport={{ once: true }}
				variants={fadeInOut(1.2)}
				className='flex flex-col'>
				<p
					className='mb-10 text-3xl font-light leading-normal 
                tracking-tighter lg:mx-40 lg:mt-40 lg:text-[3.5rem]'>
					{REVIEW.content}
				</p>
				<div className='flex items-center justify-center gap-6'>
					<img
						src={xaviour}
						alt='xaviour review'
						width={80}
						height={80}
						className='rounded-full border'
					/>
					<div className='tracking-tighter'>
						<h6>{REVIEW.name}</h6>
						<p className='text-sm text-neutral-500'>
							{REVIEW.profession}
						</p>
					</div>
				</div>
			</motion.div>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={staggerContainer(0.4)}
				viewport={{ once: true }}
				className='mt-14 flex flex-col items-center justify-center gap-2 md:flex-row'>
				{[customer1, customer2, customer3].map((customer, index) => (
					<motion.img
						variants={fadeInWithStagger(0.5)}
						key={index}
						src={customer}
						alt='cutomer review'
						className='md:w-1/3 rounded-br-3xl rounded-tl-3xl object-cover'
					/>
				))}
			</motion.div>
		</section>
	)
}

export default Reviews
