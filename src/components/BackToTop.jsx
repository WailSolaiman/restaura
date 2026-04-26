import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'

const SCROLL_THRESHOLD = 380

const BackToTop = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const onScroll = () => {
			setVisible(window.scrollY > SCROLL_THRESHOLD)
		}
		onScroll()
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, [])

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<AnimatePresence>
			{visible && (
				<motion.button
					type='button'
					initial={{ opacity: 0, scale: 0.85, y: 12 }}
					animate={{ opacity: 1, scale: 1, y: 0 }}
					exit={{ opacity: 0, scale: 0.85, y: 12 }}
					transition={{ duration: 0.2 }}
					className='fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/55 text-neutral-200 shadow-lg shadow-black/50 backdrop-blur-xl transition-colors hover:border-pink-400/40 hover:bg-pink-500/15 hover:text-pink-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/70 md:bottom-8 md:right-8'
					onClick={scrollToTop}
					aria-label='Back to top'>
					<FaArrowUp className='text-lg' aria-hidden />
				</motion.button>
			)}
		</AnimatePresence>
	)
}

export default BackToTop
