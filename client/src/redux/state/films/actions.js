import axios from 'axios';
import {url} from 'utilities/utilities';

export const initializeFilms = dispatch => {
	return async (dispatch, getState) => {
		const hasBeenLoaded = getState().films.hasBeenLoaded;
		if (hasBeenLoaded === false) {
			dispatch({type: 'LOADING_FILMS'});
			try {
				const res = await axios.get(url.films);
				dispatch({
					type: 'RESOLVED_INITIALIZE_FILMS',
					payload: res.data.results
				});
			} catch (error) {
				dispatch({type: 'REJECTED_INITIALIZE_FILMS'});
			}
		} else {
			dispatch({type: 'FILMS_ALREADY_LOADED'});
		}
	};
};