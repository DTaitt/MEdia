import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { filmsReducer } from './state/films/reducer';
import { showsReducer } from './state/shows/reducer';
import { currentMediaReducer } from './state/currentMedia/reducer';

const rootReducer = combineReducers({
	films: filmsReducer,
	router: routerReducer,
	shows: showsReducer,
	currentMedia: currentMediaReducer,
});

export default rootReducer;