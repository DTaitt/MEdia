import {combineReducers} from 'redux';

export function dataReducer(data = [], action) {
	switch (action.type) {
	case 'RESOLVED_INITIALIZE_SHOWS':
		return [...data, ...action.payload];
	default:
		return data;
	}
}

export function hasBeenLoadedReducer(hasBeenLoaded = false, action) {
	switch (action.type) {
	case 'RESOLVED_INITIALIZE_SHOWS':
	case 'SHOWS_ALREADY_LOADED':
		return true;
	default:
		return false;
	}
}

// SHOWS REDUCER
export const showsReducer = combineReducers({
	data: dataReducer,
	hasBeenLoaded: hasBeenLoadedReducer
});

