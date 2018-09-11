import React from 'react';
import {
	Route,
	Switch
} from 'react-router-dom';
import Loadable from 'react-loadable';

import './App.css';

const HomePage = Loadable({
  loader: () => import('pages/home/home'),
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

const ProfilePage = Loadable({
  loader: () => import('pages/profile'),
  loading: () => false
});

export default function App() {
  return (
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/films" component={MediaListPage}/>
        <Route exact path="/shows" component={MediaListPage}/>
        <Route exact path="/films/:film" component={MediaDetailPage}/>
        <Route exact path="/shows/:show" component={MediaDetailPage}/>
        <Route path="/profile" component={ProfilePage}/>
        <Route path="/about" component={AboutPage}/>
      </Switch>
  );
} 