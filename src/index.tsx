import React from 'react';
import ReactDOM from 'react-dom';
import Home from './pages/Home';
import Slides from './pages/Slides';
import './style/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Home/>
		<Slides/>
	</React.StrictMode>,
	document.getElementById('root')
);
