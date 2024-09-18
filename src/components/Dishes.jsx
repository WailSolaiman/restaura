import { motion } from 'framer-motion'

import DishCard from './DishCard'
import { DISHES } from '../constants'
import { staggerContainer, fadeInWithStagger } from '../animation'

const Dishes = () => {
	return (
		<section className='container mx-auto py-16' id='dishes'>
			<h2 className='mb-8 text-center text-3xl tracking-tighter'>
				Our Dishes
			</h2>
			<motion.div
				initial='hidden'
				whileInView='visible'
				variants={staggerContainer(0.2)}
				viewport={{ once: true }}
				className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
				{DISHES.map((project, index) => (
					<motion.div variants={fadeInWithStagger(0.5)} key={index}>
						<DishCard project={project} />
					</motion.div>
				))}
			</motion.div>
		</section>
	)
}

export default Dishes
