import React, {PureComponent} from 'react';
import Template from './template';

export default class _Home extends PureComponent{
	render() {
		return(
			<Template pageType='home' >
				<p>Im for the home page</p>
			</Template>
		);
	}
}