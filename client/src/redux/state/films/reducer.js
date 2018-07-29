export function filmsReducer(films = [], action) {
	switch (action.type) {
	case 'RESOLVED_INITIALIZE_FONTS':
		return [...films, ...action.payload];
	default:
		return films;
	}
}