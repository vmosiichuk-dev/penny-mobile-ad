import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Slider } from '@components/Slider/Slider.jsx';
import { Logo } from '@components/Logo/Logo.jsx';

export const App = () => {
	useEffect(() => {
		const preventGestureStart = (e) => e.preventDefault();

		document.addEventListener('gesturestart', preventGestureStart, {
			passive: false,
		});

		return () => {
			document.removeEventListener('gesturestart', preventGestureStart);
		};
	}, []);

	return (
		<BrowserRouter>
			<Slider />
			<Logo />
		</BrowserRouter>
	);
};
