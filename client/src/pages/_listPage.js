import React, {Component} from 'react';
import _Layout from './_layout';

export default class ListPage extends Component{
	render() {
		return(
			<_Layout pageType={`${this.props.match.path}`} >
				<p>{`I'm from the ${this.props.match.path} page`}</p>
			</_Layout>
		);
	}
}