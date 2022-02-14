import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import './style/index.scss';
import Home from './elements/Home/Home';
import NavBar from './elements/NavBar/NavBar';
import Socials from './elements/Socials/Socials';
import About from './elements/About/About';
import Projects from './elements/Projects/Projects';
import Footer from './elements/Footer/Footer';

ReactDOM.render(
	<React.StrictMode>
		<NavBar/>
		<Socials/>
		<Home/>
		<About/>
		<Projects/>
		<Footer/>

		<Toaster 
			position='bottom-center'
			toastOptions={{
				style: {
					'backgroundColor': '#1c2138',
					'color': '#fff',
					'fontFamily': "'Lato', sans-serif"
				}
			}}
		/>
	</React.StrictMode>,
	document.getElementById('root')
);
