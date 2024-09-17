import video from '../assets/hero.mp4'
import logo from '../assets/logo.png'
import hero from '../assets/hero.jpeg'

const HeroSection = () => {
	return (
		<section className='relative flex h-screen items-center justify-center'>
			<div className='absolute inset-0 -z-20 h-full w-full overflow-hidden'>
				<video
					muted
					autoPlay
					playsInline
					loop
					poster={hero}
					src={video}
					className='h-full w-full object-cover'></video>
			</div>
			<div
				className='absolute inset-0 -z-10 bg-gradient-to-b
            from-transparent from-70% to-black'></div>
			<div className='relative z-20 flex h-screen flex-col justify-end pb-20'>
				<img src={logo} alt='restaura' className='w-full p-4' />
				<p className='p-4 text-lg tracking-tighter text-white'>Paris</p>
			</div>
		</section>
	)
}

export default HeroSection
