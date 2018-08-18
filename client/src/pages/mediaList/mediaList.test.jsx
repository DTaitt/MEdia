import React from 'react';
import enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import _MediaList from 'pages/mediaList/mediaList';
import { initializeStore } from 'redux/store';

describe('<_MediaList />', () => {
	const store = initializeStore();
	const wrapper = shallow(
		<Provider store={store}>
			<_MediaList />
		</Provider>
	);
	it('renders itself', () => {
		expect(wrapper.exists()).toBe(true);
	});
});