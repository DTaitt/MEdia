import axios from 'axios';
import {URL} from 'utilities/utilities';

export const initializeShows = dispatch => {
	return async (dispatch, getState) => {
		const hasBeenLoaded = getState().shows.hasBeenLoaded;
		if (hasBeenLoaded === false) {
			dispatch({type: 'LOADING_SHOWS'});
			try {
				const res = await axios.get(URL.TV);
				dispatch({
					type: 'RESOLVED_INITIALIZE_SHOWS',
					payload: res.data.results
				});
			} catch (error) {
				dispatch({type: 'REJECTED_INITIALIZE_SHOWS'});
			}
		} else {
			dispatch({type: 'SHOWS_ALREADY_LOADED'});
		}
	};
};