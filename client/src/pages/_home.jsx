import React, {PureComponent} from 'react';
import _Layout from './_layout';

export default class _Home extends PureComponent{
	render() {
		return(
			<_Layout pageType='home' >
				<p>Im for the home page</p>
			</_Layout>
		);
	}
}