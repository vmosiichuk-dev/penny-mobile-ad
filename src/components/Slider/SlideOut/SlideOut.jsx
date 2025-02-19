import PropTypes from 'prop-types';
import { getClassWithId } from '@utils/getClassWithId.js';
import { slideImages, slideButton, slideCta } from './SlideOut.constants.js';
import { CLASSES, GSAP_CLASSES } from '@constants/classes.js';
import './SlideOut.styles.css';

export const SlideOut = ({ clickTag, onClick, ref }) => {
	const slideButtonClass = getClassWithId(
		CLASSES.slideItem,
		slideButton.id,
		GSAP_CLASSES.slideOut
	);

	const slideCtaClass = getClassWithId(
		CLASSES.slideItem,
		slideCta.id,
		GSAP_CLASSES.slideOut
	);

	return (
		<div ref={ref} className={getClassWithId(CLASSES.slide, 'slide-out')}>
			{slideImages.map((img) => (
				<img
					key={img.id}
					src={img.src}
					alt={img.alt}
					loading="lazy"
					className={getClassWithId(
						CLASSES.slideItem,
						img.id,
						GSAP_CLASSES.slideOut
					)}
				/>
			))}

			<button onClick={onClick} className={slideButtonClass}>
				<img
					src={slideButton.src}
					alt={slideButton.alt}
					loading="lazy"
				/>
			</button>

			<a href={clickTag} className={slideCtaClass}>
				<img src={slideCta.src} alt={slideCta.alt} loading="lazy" />
			</a>
		</div>
	);
};

SlideOut.propTypes = {
	clickTag: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};
