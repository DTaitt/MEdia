import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import './App.css';
 
import _Home from 'pages/_home';
import _About from 'pages/_about';
import _List from 'pages/_list';

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={_Home}/>
			<Route exact path="/films" component={_List}/>
			<Route exact path="/films/:film" component={_List}/>
			<Route path="/about" component={_About}/>
		</Fragment>
	</Router>
);

export default App;