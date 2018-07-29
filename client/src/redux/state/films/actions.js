import axios from 'axios';
import {url} from 'utilities/utilities';

export const initializeFonts = dispatch => {
	return async (dispatch) => {
		dispatch({type: 'LOADING_FONTS'});
		try {
			const res = await axios.get(url.films);
			dispatch({
				type: 'RESOLVED_INITIALIZE_FONTS',
				payload: res.data.results
			});
		} catch (error) {
			dispatch({type: 'REJECTED_INITIALIZE_FONTS'});
		}
	};
	
};