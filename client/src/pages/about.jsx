import React, {PureComponent} from 'react';
import Template from './template';

export default class _About extends PureComponent{
	render() {
		return(
			<Template pageType='about' >
				<h2>About My Media</h2>
				<h3>Description</h3>
				<p>My Media is a responsive and accessible site that allows users to view some of the top rated recent movies and tv shows. Users can view information about the movie/show and favorite them to add them to their profile.</p>
				<h3>Tech Stack/Techniques</h3>
				<ul>
					<li>React</li>
					<li>Javascript/ES6+</li>
					<li>Redux</li>
					<li>Redux Thunk</li>
					<li>React Router 4</li>
					<li>React Loadable</li>
				</ul>
				<h3>Styled With</h3>
				<ul>
					<li>SASS/CSS</li>
					<li>Ant Design</li>
				</ul>
				<h3>Tested With</h3>
				<ul>
					<li>Jest</li>
					<li>Enzyme</li>
				</ul>
				<h3>Misc</h3>
				<ul>
					<li>ESLint</li>
					<li>Lodash</li>
					<li>Code Splitting/ Lazy Loading</li>
				</ul>
			</Template>
		);
	}
}