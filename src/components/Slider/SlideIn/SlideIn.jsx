import PropTypes from 'prop-types';
import { getClassWithId } from '@utils/getClassWithId.js';
import { slideImages, slideCta } from './SlideIn.constants.js';
import { CLASSES, GSAP_CLASSES } from '@constants/classes.js';
import './SlideIn.styles.css';

export const SlideIn = ({ clickTag, ref }) => {
	const slideCtaClass = getClassWithId(
		CLASSES.slideItem,
		slideCta.id,
		GSAP_CLASSES.slideIn
	);

	return (
		<div ref={ref} className={getClassWithId(CLASSES.slide, 'slide-in')}>
			{slideImages.map((img) => (
				<img
					key={img.id}
					src={img.src}
					alt={img.alt}
					loading="lazy"
					className={getClassWithId(
						CLASSES.slideItem,
						img.id,
						GSAP_CLASSES.slideIn
					)}
				/>
			))}

			<a href={clickTag} className={slideCtaClass}>
				<img src={slideCta.src} alt={slideCta.alt} loading="lazy" />
			</a>
		</div>
	);
};

SlideIn.propTypes = {
	clickTag: PropTypes.string.isRequired,
};
