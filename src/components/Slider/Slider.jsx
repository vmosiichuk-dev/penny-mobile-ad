import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSlideChange } from '@hooks/useSlideChange.jsx';
import { SEARCH_PARAM_KEY, CLICK_TAG_FALLBACK } from '@constants/clicktag.js';
import { CLASSES } from '@constants/classes.js';

import { SlideOut } from './SlideOut/SlideOut.jsx';
import { SlideIn } from './SlideIn/SlideIn.jsx';
import './Slider.styles.css';

export const Slider = () => {
	const [searchParams] = useSearchParams();
	const clickTag = searchParams.get(SEARCH_PARAM_KEY) || CLICK_TAG_FALLBACK;

	const [slideChangeStarted, setSlideChangeStarted] = useState(false);
	const [slideChangeCompleted, setSlideChangeCompleted] = useState(false);

	const { slideOutRef, handleSlideOut, slideInRef } = useSlideChange(
		slideChangeStarted,
		setSlideChangeStarted,
		setSlideChangeCompleted
	);

	return (
		<div className={CLASSES.slider}>
			{!slideChangeCompleted && (
				<SlideOut
					clickTag={clickTag}
					onClick={handleSlideOut}
					ref={slideOutRef}
				/>
			)}

			{slideChangeStarted && (
				<SlideIn clickTag={clickTag} ref={slideInRef} />
			)}
		</div>
	);
};
