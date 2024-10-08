import React, { useState } from 'react'

import logo from '../assets/logo.png'
import { LINKS } from '../constants'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen)
	}

	const handleScroll = (event, targetId) => {
		event.preventDefault()
		const targetElement = document.getElementById(targetId)
		if (targetElement || targetElement === 'homepage') {
			const offsetTop = targetElement.offsetTop - 80
			window.scrollTo({
				top: offsetTop,
				behavior: 'smooth',
			})
		}
		setIsMobileMenuOpen(false)
	}

	return (
		<nav className='fixed top-0 md:top-4 z-50 flex w-full flex-col items-center justify-center'>
			<div
				className='flex w-full items-center justify-between overflow-y-hidden 
            p-4 backdrop-blur-lg lg:m-2 lg:w-[50rem] lg:rounded-full lg:shadow-lg'>
				<a
					href='#homepage'
					onClick={(e) => handleScroll(e, 'homepage')}>
					<img src={logo} alt='logo' width={100} height={24} />
				</a>
				<div className='hidden space-x6 lg:flex'>
					{LINKS?.map((link, index) => (
						<a
							key={index}
							href={`#${link.targetId}`}
							className={`text-sm border-r-8 border-neutral-300/20 pl-6 hover:opacity-50 
								hover:border-pink-400 pr-1 transition-all`}
							onClick={(e) => handleScroll(e, link.targetId)}>
							{link.text}
						</a>
					))}
				</div>
				<div className='lg:hidden'>
					<button onClick={toggleMobileMenu}>
						{isMobileMenuOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>
			</div>
			{isMobileMenuOpen && (
				<div className='w-full backdrop-blur-lg lg:hidden h-screen'>
					{LINKS?.map((link, index) => (
						<a
							key={index}
							href={`#${link.targetId}`}
							className='block p-4 uppercase border-b-2 border-dotted border-neutral-700 
                        py-6 text-center text-2xl tracking-tighter'
							onClick={(e) => handleScroll(e, link.targetId)}>
							{link.text}
						</a>
					))}
					<img
						src={logo}
						alt='logo'
						width={200}
						height={48}
						className='mx-auto mt-8'
					/>
				</div>
			)}
		</nav>
	)
}

export default Navbar
