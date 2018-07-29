import {combineReducers} from 'redux';
import {filmsReducer} from './state/films/reducer';
const rootReducer = combineReducers({
	films: filmsReducer,
});

export default rootReducer;