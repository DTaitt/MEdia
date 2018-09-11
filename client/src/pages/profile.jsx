import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import Template from 'pages/template';
import ConnectedMediaItem from '../components/MediaItem/MediaItem';

class Profile extends Component {
	render() {
		return(
			<Template>
				<h1>Welcome Back!</h1>
				<h2>Favorites</h2>
				{   
					_.isEmpty(this.props.favorites)
						? <p>No Favorites Found. Get Favoriting!</p>
						: this.props.favorites.map(fav => {
							return <ConnectedMediaItem 
								key={fav.id} 
								item={fav} 
								pageType={fav.pageType}
							/>;
						})
				}
			</Template>
		);
	}
}

const mapStateToProps = state => ({
	favorites: state.favorites,
});

const ConnectedProfile = connect(mapStateToProps)(Profile);
export default ConnectedProfile;
