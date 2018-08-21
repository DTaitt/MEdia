import _ from 'lodash';

export const setCurrentMedia = (newMedia) => {
	return async (dispatch, getState) => {
		const currentMedia = getState().currentMedia.data;
		if (_.isEmpty(currentMedia)) {
			dispatch({
				type: 'SET_CURRENT_MEDIA',
				payload: newMedia,
			});
		} else if (currentMedia.id === newMedia.id) {
			dispatch({type: 'CURRENT_MEDIA_ALREADY_SET'});
		} else if (currentMedia.id !== newMedia.id) { 
			dispatch({
				type: 'UPDATE_CURRENT_MEDIA',
				payload: newMedia,
			});
		}
	};
};