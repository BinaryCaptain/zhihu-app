import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import Footer from './components/footer/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<div className="wrapper">
		<App />
		<Footer />
	</div>
	,
	document.getElementById('root'));
    registerServiceWorker();
