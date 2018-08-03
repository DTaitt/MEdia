export const url = {
	films: `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_FILMS_KEY}&page=10`,
	imgPrefix: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2'
};

export function removeSpaces(input) {
	return input.split(' ').join('-').toLowerCase();
}

export function parseURlId(url) {
	let lastIndex = url.lastIndexOf('-');
	return url.slice(lastIndex + 1);
}

export function capitalizeFirstLetter(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}

export function replaceLastElement(arr, newItem) {
	return arr.map(el => {
		return el === arr[arr.length - 1] ? newItem : el;
	});
}

export function parseBreadcrumbPath(path) {
	return path.split('/').slice(1);
}

export function createBreadcrumbs(mediaTitle, path) {
	const crumbs = mediaTitle 
		? replaceLastElement(parseBreadcrumbPath(path), mediaTitle)
		: parseBreadcrumbPath(path);
	return crumbs;
}

export function createPageTitle(mediaTitle, crumbs) {
	const pageTitle = mediaTitle 
		? mediaTitle
		: capitalizeFirstLetter(crumbs[crumbs.length - 1]);
	return pageTitle;
}