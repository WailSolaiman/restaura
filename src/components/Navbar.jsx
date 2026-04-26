import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import logo from '../assets/logo.png'
import { LINKS } from '../constants'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	useEffect(() => {
		if (!isMobileMenuOpen) return
		const prev = document.body.style.overflow
		document.body.style.overflow = 'hidden'
		return () => {
			document.body.style.overflow = prev
		}
	}, [isMobileMenuOpen])

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((open) => !open)
	}

	const handleScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement) {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			})
		}
		setIsMobileMenuOpen(false)
	}

	return (
		<nav
			className='fixed left-0 right-0 top-0 z-50 flex flex-col items-center'
			aria-label='Main'>
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						key='mobile-overlay'
						role='dialog'
						aria-modal='true'
						aria-label='Section links'
						className='fixed inset-0 z-40 flex flex-col bg-neutral-950/97 backdrop-blur-2xl lg:hidden'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}>
						<div
							id='mobile-nav-links'
							className='flex flex-1 flex-col justify-center px-6 pb-24 pt-28'>
							{LINKS?.map((link, index) => (
								<motion.a
									key={link.targetId}
									href={`#${link.targetId}`}
									className='border-b border-white/[0.06] py-5 text-center text-lg font-medium tracking-wide text-neutral-200 transition-colors hover:text-pink-400 active:text-pink-400'
									onClick={(e) => handleScroll(e, link.targetId)}
									initial={{ opacity: 0, y: 12 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										delay: 0.05 + index * 0.04,
										duration: 0.25,
									}}>
									{link.text}
								</motion.a>
							))}
						</div>
						<div className='absolute bottom-10 left-0 right-0 flex justify-center opacity-40'>
							<img
								src={logo}
								alt=''
								width={112}
								height={28}
								className='h-7 w-auto object-contain'
							/>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className='relative z-50 w-full px-3 pt-3 md:px-4 md:pt-5'>
				<div
					className='mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-full border border-white/10 bg-black/45 px-4 py-2.5 shadow-lg shadow-black/40 backdrop-blur-xl md:px-6 md:py-3'>
					<a
						href='#homepage'
						className='shrink-0 rounded-lg outline-none ring-pink-400/60 focus-visible:ring-2'
						onClick={(e) => handleScroll(e, 'homepage')}>
						<img
							src={logo}
							alt='Restaura — home'
							width={72}
							height={18}
							className='h-5 w-auto object-contain md:h-6'
						/>
					</a>

					<div className='hidden items-center gap-0.5 lg:flex'>
						{LINKS?.map((link) => (
							<a
								key={link.targetId}
								href={`#${link.targetId}`}
								className='rounded-full px-3.5 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-pink-500/10 hover:text-pink-100'
								onClick={(e) => handleScroll(e, link.targetId)}>
								{link.text}
							</a>
						))}
					</div>

					<button
						type='button'
						className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/[0.06] text-neutral-200 transition-colors hover:bg-white/10 hover:text-white lg:hidden'
						onClick={toggleMobileMenu}
						aria-expanded={isMobileMenuOpen}
						aria-controls='mobile-nav-links'
						aria-label={
							isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'
						}>
						{isMobileMenuOpen ? (
							<FaTimes className='text-lg' aria-hidden />
						) : (
							<FaBars className='text-lg' aria-hidden />
						)}
					</button>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
