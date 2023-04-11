import { useLocation } from 'react-router-dom'; 

import { Footer } from './components/UI/Footer';
import { Header } from './components/Header';

import './style/css/style.css';
import { AppRouter } from './router/AppRouter';
import { useState } from 'react';

function App() {
	const [hideHeaderAndFooter, setHideHeaderAndFooter] = useState(false);

	const { pathname } = useLocation();
	if (pathname.includes('/admin-page') && !hideHeaderAndFooter) {
		setHideHeaderAndFooter(true);
	} else if (!pathname.includes('/admin-page') && hideHeaderAndFooter) {
		setHideHeaderAndFooter(false);
	}

	return (
		<div className="App" data-testid='app'>
			{!hideHeaderAndFooter && <Header />}
			<AppRouter />
			{!hideHeaderAndFooter && <Footer />}
		</div>
	);
}

export default App;
