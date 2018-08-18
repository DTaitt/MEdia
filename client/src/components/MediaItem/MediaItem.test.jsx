import React from 'react';
import enzyme, { shallow } from 'enzyme';
import MediaItem from './MediaItem';

describe('<MediaItem />', () => {
	const item = {
		title: 'title',
		id: 'id',
		poster_path: 'poster_path',
		vote_average: 'vote_average',
		release_date: 'release_date'
	};
	const wrapper = shallow(<MediaItem item={item} />);
	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});
});