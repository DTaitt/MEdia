import _ from 'lodash';

export const toggleFavorite = media => {
	return (dispatch, getState) => {
		const favorites = getState().favorites;
		const isInFav = favorites.some(fav => {
			return fav.id === media.id;
		});
		
		_.isEmpty(favorites) || isInFav === false
			? dispatch({type: 'ADD_FAVORITE', payload: media})
			: dispatch({type: 'DELETE_FAVORITE', payload: media});
	};
};