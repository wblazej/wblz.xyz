import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import Home from './elements/Home/Home';
import NavBar from './elements/NavBar/NavBar';
import Socials from './elements/Socials/Socials';

ReactDOM.render(
	<React.StrictMode>
		<NavBar/>
		<Socials/>
		<Home/>
	</React.StrictMode>,
	document.getElementById('root')
);
