import { CUSINES } from '../constants'

const Expertise = () => {
	return (
		<section id='expertise'>
			<h2 className='mt-8 text-center text-3xl tracking-tighter lg:text-4xl'>
				Our Expertise
			</h2>
			<div className='container mx-auto px-4'>
				{CUSINES.map((cusine, index) => (
					<div
						key={index}
						className='flex flex-col md:flex-row items-center border-b-4 border-dotted border-neutral-700/40 py-8'>
						<div className='flex-shrink-0 pr-8 text-2xl hidden md:block'>
							{cusine.number}
						</div>
						<div className='w-full md:w-1/3 flex-shrink-0'>
							<img
								src={cusine.image}
								alt={cusine.title}
								className='h-auto rounded-3xl'
							/>
						</div>
						<div className='pl-8'>
							<h3 className='text-2xl md:text-4xl mt-4 uppercase tracking-tighter text-rose-300'>
								{cusine.title}
							</h3>
							<p className='mt-4 text-lg md:text-2xl tracking-tighter'>
								{cusine.description}
							</p>
							<p className='mt-8 text-sm text-neutral-500'>
								{cusine.description2}
							</p>
						</div>
					</div>
				))}
			</div>
		</section>
	)
}

export default Expertise
