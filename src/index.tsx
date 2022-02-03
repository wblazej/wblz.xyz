import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './pages/Introduction';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Slides from './pages/Slides';
import './style/index.scss';

ReactDOM.render(
	<React.StrictMode>
		<Home/>
		{/* <Slides/> */}
		<Introduction/>
		<Footer/>
	</React.StrictMode>,
	document.getElementById('root')
);
