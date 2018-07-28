import React, {Component} from 'react';
import _Layout from './_layout';

export default class Home extends Component{
	render() {
		return(
			<_Layout pageType='home' >
				<p>Im for the home page</p>
			</_Layout>
		);
	}
}