import React from 'react';
import { List, Card, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentMedia } from 'redux/state/currentMedia/actions.';
import { updateMedia } from 'utilities/utilities';
import { toggleFavorite } from 'redux/state/favorites/actions';

function MediaItem(props){
	const media = updateMedia(props.item, props.pageType);
	const isInFav = props.favorites.some(fav => {
		return fav.id === media.id;
	});

	return (
		<List.Item>
			<Card 
				title={
					<Link 
						to={media.url}
						onClick={() => {props.setCurrentMedia(media);}}
					>
						{media.mediaTitle}
					</Link>}
				cover={<img alt={media.mediaTitle} src={media.imageUrl} />}
				extra={media.vote_average}
			>
				<Card.Meta
					title={
						<Link 
							to={media.url}
							onClick={() => {props.setCurrentMedia(media);}}
						>
						See More...
						</Link>
					}
				/>
				<Icon 
					type={ isInFav ? 'heart' : 'heart-o'}
					style={ isInFav ? {color:'red'} : {}}
					onClick={() => props.toggleFavorite(media)}
				/>
			</Card>
		</List.Item>
	);
}

const mapStateToProps = state => ({
	favorites: state.favorites,
});

const mapDispatchToProps = ({
	setCurrentMedia,
	toggleFavorite
});

const ConnectedMediaItem = connect(mapStateToProps, mapDispatchToProps)(MediaItem);
export default ConnectedMediaItem;