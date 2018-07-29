import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import './App.css';
 
import Home from 'pages/_home';
import About from 'pages/_about';
import ListPage from 'pages/_listPage';

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={Home}/>
			<Route exact path="/films" component={ListPage}/>
			<Route path="/about" component={About}/>
		</Fragment>
	</Router>
);

export default App;