import { SOCIAL_MEDIA_LINKS } from '../constants'

const Footer = () => {
	return (
		<section id='footer' className='mb-14 mt-14'>
			<div className='flex items-center justify-center gap-5'>
				{SOCIAL_MEDIA_LINKS.map((link, index) => (
					<a key={index} href={link.href} target='_blank'>
						{link.icon}
					</a>
				))}
			</div>
			<p className='mt-4 text-center text-sm tracking-tighter text-neutral-500'>
				&copy;2024 Restaura. All rights reserved.
			</p>
		</section>
	)
}

export default Footer
