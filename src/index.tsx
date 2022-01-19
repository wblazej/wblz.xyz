import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import Slides from './components/Slides';
import './style/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Home/>
		<Slides/>
	</React.StrictMode>,
	document.getElementById('root')
);
