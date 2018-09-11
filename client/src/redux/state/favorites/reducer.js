export function favoritesReducer(favorites = [], action) {
	switch (action.type) {
	case 'ADD_FAVORITE':
		return [
			...favorites,
			action.payload,
		];
	case 'DELETE_FAVORITE':
		return favorites.filter(fav => {
			return fav.id !== action.payload.id;
		});
	default:
		return favorites;
	}
}