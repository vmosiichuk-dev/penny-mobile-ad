import { gsap } from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { GSAP_OPTIONS } from '@constants/gsap.js';
import { GSAP_CLASSES } from '@constants/classes.js';

const slideOutSelector = `.${GSAP_CLASSES.slideOut}`;
const slideInSelector = `.${GSAP_CLASSES.slideIn}`;

export const useSlideChange = (
	slideChangeStarted,
	setSlideChangeStarted,
	setSlideChangeCompleted
) => {
	const slideOutRef = useRef(null);
	const slideOutScope = useGSAP({ scope: slideOutRef });

	const handleSlideOut = slideOutScope.contextSafe(() => {
		const slideOutOptions = GSAP_OPTIONS.getSlideOut(window.innerWidth);

		gsap.to(slideOutSelector, {
			...slideOutOptions,
			onStart: () => {
				setSlideChangeStarted(true);
				gsap.to(slideOutSelector, GSAP_OPTIONS.opacity);
			},
			onComplete: () => {
				setSlideChangeCompleted(true);
			},
		});
	});

	const slideInRef = useRef(null);

	useGSAP(
		() => {
			if (slideChangeStarted) {
				const slideInFromOptions = GSAP_OPTIONS.getSlideInFrom(
					window.innerWidth
				);

				gsap.fromTo(
					slideInSelector,
					slideInFromOptions,
					GSAP_OPTIONS.slideInTo
				);
			}
		},
		{ scope: slideInRef, dependencies: [slideChangeStarted] }
	);

	return { slideInRef, slideOutRef, handleSlideOut };
};
