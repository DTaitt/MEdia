export const URL = {
	FILMS: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&page=1&primary_release_year=2018&vote_average.gte=7`,
	TV: `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_MOVIE_DB_KEY}&page=1&timezone=America%2FNew_York&include_null_first_air_dates=true&vote_average.gte=7`,
	IMGPREFIX: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
};

export function removeSpaces(title) {
	return title.split(' ').join('-').toLowerCase();
}

export function createMediaUrl(title, id) {
	const mediaUrl = `/films/${removeSpaces(title)}-${id}`;
	return mediaUrl;
}

export function createMediaImageUrl(poster_path) {
	const mediaImageUrl = `${URL.IMGPREFIX}${poster_path}`;
	return mediaImageUrl;
}

export function parseURlId(url) {
	let lastIndex = url.lastIndexOf('-');
	return url.slice(lastIndex + 1);
}

export function createBreadcrumbs(mediaTitle, path) {
	const crumbs = mediaTitle 
		? replaceLastElement(parseBreadcrumbPath(path), mediaTitle)
		: parseBreadcrumbPath(path);
	return crumbs;
}

export function replaceLastElement(arr, newItem) {
	return arr.map(el => {
		return el === arr[arr.length - 1] ? newItem : el;
	});
}

export function parseBreadcrumbPath(path) {
	return path.split('/').slice(1);
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function createPageTitle(mediaTitle, crumbs) {
	const pageTitle = mediaTitle 
		? mediaTitle
		: capitalizeFirstLetter(crumbs[crumbs.length - 1]);
	return pageTitle;
}