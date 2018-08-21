import {combineReducers} from 'redux';

export function dataReducer(data = {}, action) {
	switch (action.type) {
	case 'SET_CURRENT_MEDIA':
	case 'UPDATE_CURRENT_MEDIA':
		return action.payload;
	default:
		return data;
	}
}


export function hasBeenSetReducer(hasBeenSet = false, action) {
	switch (action.type) {
	case 'SET_CURRENT_MEDIA':
	case 'UPDATE_CURRENT_MEDIA':
		return true;
	default:
		return hasBeenSet;
	}
}

// CURRENT MEDIA REDUCER
export const currentMediaReducer = combineReducers({
	data: dataReducer,
	hasBeenSet: hasBeenSetReducer,
});

