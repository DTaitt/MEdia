import React, {PureComponent} from 'react';
import Template from './template';

export default class _About extends PureComponent{
	render() {
		return(
			<Template pageType='about' >
				<p>Im for the about page</p>
			</Template>
		);
	}
}