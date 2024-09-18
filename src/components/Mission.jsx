import { motion } from 'framer-motion'

import missionImg from '../assets/mission.jpeg'
import mission from '../assets/mission.mp4'
import { MISSION } from '../constants'
import { slideInFromBottom, fadeInOut } from '../animation'

const Mission = () => {
	return (
		<section id='mission'>
			<div className='container mx-auto text-center'>
				<h2 className='mb-8 text-3xl lg:text-4xl'>Our Mssion</h2>
				<div className='relative flex items-center justify-center'>
					<motion.video
						initial='hidden'
						whileInView='visible'
						viewport={{ once: true }}
						variants={fadeInOut(0.8)}
						autoPlay
						muted
						loop
						playsInline
						className='w-full rounded-3xl'
						poster={missionImg}>
						<source src={mission} type='video/mp4' />
					</motion.video>
					<div className='flex items-center justify-center absolute h-full w-full rounded-3xl bg-black/40'>
						<motion.p
							initial='hidden'
							whileInView='visible'
							variants={slideInFromBottom(1.2)}
							className='absolute max-w-lg tracking-tighter lg:text-3xl'>
							{MISSION}
						</motion.p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Mission
