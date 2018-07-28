import React from 'react';
import enzyme, {shallow} from 'enzyme';
import App from './App';


describe('<App />', () => {
	const wrapper = shallow(<App />);
	it('renders', () => {
		expect(wrapper.exists()).toBe(true);
	});
});
