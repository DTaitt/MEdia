import {combineReducers} from 'redux';

export function dataReducer(data = [], action) {
	switch (action.type) {
	case 'RESOLVED_INITIALIZE_FILMS':
		return [...data, ...action.payload];
	default:
		return data;
	}
}

export function hasBeenLoadedReducer(hasBeenLoaded = false, action) {
	switch (action.type) {
	case 'RESOLVED_INITIALIZE_FILMS':
	case 'FILMS_ALREADY_LOADED':
		return true;
	default:
		return false;
	}
}

export const filmsReducer = combineReducers({
	data: dataReducer,
	hasBeenLoaded: hasBeenLoadedReducer
});

