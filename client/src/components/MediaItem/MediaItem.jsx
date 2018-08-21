import React from 'react';
import { List, Card } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { setCurrentMedia } from 'redux/state/currentMedia/actions.';
import { updateMedia } from 'utilities/utilities';

function MediaItem({item, setCurrentMedia, pageType}){

	const media = updateMedia(item, pageType);

	return (
		<List.Item>
			<Card 
				title={
					<Link 
						to={media.url}
						onClick={() => {setCurrentMedia(media);}}
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
							onClick={() => {setCurrentMedia(media);}}
						>
						See More...
						</Link>
					}
					description={media.releaseDate}
				/>
			</Card>
		</List.Item>
	);
}

const mapDispatchToProps = ({
	setCurrentMedia,
});

const ConnectedMediaItem = connect(null, mapDispatchToProps)(MediaItem);
export default ConnectedMediaItem;