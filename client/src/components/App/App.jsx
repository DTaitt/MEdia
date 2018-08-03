import React, { Fragment } from 'react';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
import Loadable from 'react-loadable';
import './App.css';

const HomePage = Loadable({
  loader: () => import('pages/home'),
  loading: () => false
});

const AboutPage = Loadable({
  loader: () => import('pages/about'),
  loading: () => false
});

const MediaListPage = Loadable({
  loader: () => import('pages/mediaList/mediaList'),
  loading: () => false
});

const MediaDetailPage = Loadable({
  loader: () => import('pages/mediaDetail'),
  loading: () => false
});

const App = () => (
	<Router>
		<Fragment>
			<Route exact path="/" component={HomePage}/>
			<Route exact path="/films" component={MediaListPage}/>
			<Route exact path="/films/:film" component={MediaDetailPage}/>
			<Route path="/about" component={AboutPage}/>
		</Fragment>
	</Router>
);

export default App;