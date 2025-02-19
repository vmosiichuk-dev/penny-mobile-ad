import { default as cta } from '@assets/cta.webp';
import { arrow, gesture, hl1, hl2, packshots, sl } from '@assets/slide-out';

export const slideCta = {
	id: 'slide-out--cta',
	src: cta,
	alt: 'Slide out call to action',
};

export const slideButton = {
	id: 'slide-out--arrow',
	src: arrow,
	alt: 'Next slide arrow button',
};

export const slideImages = [
	{
		id: 'slide-out--hl1',
		src: hl1,
		alt: 'Slide out primary headline',
	},
	{
		id: 'slide-out--hl2',
		src: hl2,
		alt: 'Slide out secondary headline',
	},
	{
		id: 'slide-out--packshots',
		src: packshots,
		alt: 'Packshots',
	},
	{
		id: 'slide-out--sl',
		src: sl,
		alt: 'Sideline',
	},
	{
		id: 'slide-out--gesture',
		src: gesture,
		alt: 'Gesture',
	},
];
