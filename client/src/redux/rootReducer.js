import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { filmsReducer } from './state/films/reducer';
import {showsReducer} from './state/shows/reducer';

const rootReducer = combineReducers({
	films: filmsReducer,
	router: routerReducer,
	shows: showsReducer,
});

export default rootReducer;