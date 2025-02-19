export const GSAP_OPTIONS = {
	getSlideOut: (innerWidth) => ({
		x: -(innerWidth * 1.1),
		duration: 1.35,
		stagger: {
			amount: 0.25,
			from: 'random',
		},
	}),
	getSlideInFrom: (innerWidth) => ({
		x: innerWidth * 1.1,
		opacity: 0,
	}),
	slideInTo: {
		x: 0,
		opacity: 1,
		duration: 1.125,
		stagger: {
			amount: 0.3,
			from: 'start',
		},
	},
	opacity: {
		opacity: 0,
		duration: 0.75,
	},
};
