import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { filmsReducer } from './state/films/reducer';

const rootReducer = combineReducers({
	films: filmsReducer,
	router: routerReducer,
});

export default rootReducer;