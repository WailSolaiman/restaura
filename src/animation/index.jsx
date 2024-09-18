export const slideInFromBottom = (delay = 1) => ({
	hidden: { opacity: 0, y: 50 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
			delay: delay,
		},
	},
})

export const slideInFromLeft = (delay = 1) => ({
	hidden: { opacity: 0, x: -50 },
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
			delay: delay,
		},
	},
})

export const fadeInOut = (delay = 1) => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			duration: 0.5,
			delay: delay,
		},
	},
})

export const staggerContainer = (stagger = 0.2) => ({
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: stagger,
		},
	},
})

export const fadeInWithStagger = (duration = 0.5) => ({
	hidden: { opacity: 0, y: 20 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: duration,
		},
	},
})
