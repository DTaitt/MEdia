import React from 'react';

import Template from 'pages/template';
import './home.css';

export default function _Home(props){
	return(
		<Template pageType='home' >
			<h2>Welcome!</h2>
			{/* <img src='https://esquire.com.gr/Content/ImagesDatabase/p/crop/both/31/31caca5bb01e42c49f634b5af988dd07.jpg?quality=60&404=default&v=02'/> */}
			<div className='hero'>
				<p>Your one stop for all your film and TV needs</p>
			</div>
		</Template>
	);
}