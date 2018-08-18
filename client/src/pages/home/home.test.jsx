import React from 'react';
import enzyme, {shallow, mount} from 'enzyme';
import _Home from './home';

describe('<_Home />', () => {
	const wrapper = shallow(<_Home />);
	it('renders itself', () => {
		expect(wrapper.exists()).toBe(true);
	});
});