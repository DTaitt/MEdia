import React, {PureComponent} from 'react';
import _Layout from './_layout';

export default class _About extends PureComponent{
	render() {
		return(
			<_Layout pageType='about' >
				<p>Im for the about page</p>
			</_Layout>
		);
	}
}