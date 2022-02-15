import React from 'react';
import ReactDOM from 'react-dom';
import { Toaster } from 'react-hot-toast';
import { Element } from 'react-scroll';
import './style/index.scss';

import Home from './elements/Home/Home';
import NavBar from './elements/NavBar/NavBar';
import Socials from './elements/Socials/Socials';
import About from './elements/About/About';
import Projects from './elements/Projects/Projects';
import Footer from './elements/Footer/Footer';
import Contact from './elements/Contact/Contact';
import Section from './components/Section/Section';

ReactDOM.render(
	<React.StrictMode>
		<NavBar/>
		<Socials/>
		
		<Element name="home"><Home/></Element>

		<Section name="about" header="About">
			<About/>
		</Section>

		<Section name="projects" header="Projects">
			<Projects/>
		</Section>

		<Section name="contact" header="Share feedback">
			<Contact/>
		</Section>

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
