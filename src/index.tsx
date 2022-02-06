import React from 'react';
import ReactDOM from 'react-dom';
import Introduction from './pages/Introduction';
import Footer from './pages/Footer';
import Home from './pages/Home';
// import './style/index.scss';
import App from './pages/App';

ReactDOM.render(
	<React.StrictMode>
		{/* <Home/>
		<Introduction/>
		<Footer/> */}
		<App/>
	</React.StrictMode>,
	document.getElementById('root')
);
