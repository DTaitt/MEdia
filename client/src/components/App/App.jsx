import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import './App.css';
 
import _Home from 'pages/_home';
import _About from 'pages/_about';
import _MediaList from 'pages/_mediaList';

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={_Home}/>
			<Route exact path="/films" component={_MediaList}/>
			<Route exact path="/films/:film" component={_MediaList}/>
			<Route path="/about" component={_About}/>
		</Fragment>
	</Router>
);

export default App;