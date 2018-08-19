import React from 'react';
import { List, Card } from 'antd';
import {Link} from 'react-router-dom';
import {createMediaUrl, createMediaImageUrl} from 'utilities/utilities';

export default function MediaItem({item}){
	const {
		title = null,
		name = null,
		id,
		poster_path,
		vote_average,
		release_date = null,
		first_air_date = null
	} = item;

	const mediaTitle = title || name;
	const releaseDate = release_date || first_air_date;

	const mediaUrl = createMediaUrl(mediaTitle, id);
	const mediaImageUrl = createMediaImageUrl(poster_path);

	return (
		<List.Item>
			<Card 
				title={<Link to={mediaUrl}>{mediaTitle}</Link>}
				cover={<img alt={mediaTitle} src={mediaImageUrl} />}
				extra={vote_average}
			>
				<Card.Meta
					title={<Link to={mediaUrl}>See More...</Link>}
					description={releaseDate}
				/>
			</Card>
		</List.Item>
	);
}