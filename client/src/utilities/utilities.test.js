import {url, removeSpaces, createMediaUrl, createMediaImageUrl, parseUrlId, createBreadcrumbs, parseBreadcrumbPath, replaceLastElement, capitalizeFirstLetter, createPageTitle} from './utilities';

describe('removeSpaces', () => {
	it('removes spaces when each word is seperated with a space and replaces spaces with a "-" ', () => {
		expect(removeSpaces('this is a title')).toBe('this-is-a-title');
	});
	it('leaves the title as is when the title is one word', () => {
		expect(removeSpaces('title')).toBe('title');
	});
	it('converts capital titles to lowercase', () => {
		expect(removeSpaces('This Is A Capitalized Title')).toBe('this-is-a-capitalized-title');
	});
});

describe('createMediaUrl', () => {
	it('creates url for films', () => {
		expect(createMediaUrl('this is a title', 1234)).toBe('/films/this-is-a-title-1234');
	});
});

describe('createMediaImageUrl', () => {
	it('creates image url', () => {
		expect(createMediaImageUrl('/asdfjkl.jpg')).toBe('https://image.tmdb.org/t/p/w600_and_h900_bestv2/asdfjkl.jpg');
	});
});

describe('parseUrlId', () => {
	it('parses url id', () => {
		expect(parseUrlId('this-is-a-title-1234')).toBe('1234');
	});
});

describe('parseBreadcrumbPath', () => {
	it('parses breadcrumb path', () => {
		expect(parseBreadcrumbPath('/films/my-path-1234')).toEqual(['films', 'my-path-1234']);
	});
});

describe('replaceLastElement', () => {
	it('replace last element', () => {
		expect(replaceLastElement(['films', 'my-title-1234'], 'My Title')).toEqual(['films', 'My Title']);
	});
});

describe('createBreadcrumbs', () => {
	it('creates breadcrumbs when on a media detail page with a media title', () => {
		expect(createBreadcrumbs('This Is My Title', '/films/this-is-my-title-1234')).toEqual(['films', 'This Is My Title']);
	});
	it('creates breadcrumb on a media list page with no media title', () => {
		expect(createBreadcrumbs('/films')).toEqual(['films']);
	});
});

describe('capitalizeFirstLetter', () => {
	it('capitalizes the first letter', () => {
		expect(capitalizeFirstLetter('string')).toBe('String');
	});
	it('capitalizes the first letter if the string is already capitalized', () => {
		expect(capitalizeFirstLetter('String')).toBe('String');
	});
});

// describe('createPageTitle', () => {
// 	it('creates the page title when a media title is supplied', () => {
// 		expect(createPageTitle('This Is My Title', '/films/this-is-my-title-1234')).toBe('This Is My Title');
// 	});
// 	it('creates the page title', () => {
// 		expect(createPageTitle(['films'])).toBe('Films');
// 	});
// });