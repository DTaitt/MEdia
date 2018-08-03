import React from 'react';
import { List, Card } from 'antd';
import {Link} from 'react-router-dom';
import {url, removeSpaces} from 'utilities/utilities';

export default function MediaItem({item}){
	const {
		title,
		id,
		poster_path,
		vote_average,
		release_date
	} = item;
	const mediaUrl = `/films/${removeSpaces(title)}-${id}`;
	const mediaImageUrl = `${url.imgPrefix}${poster_path}`;
	return (
		<List.Item>
			<Card 
				title={<Link to={mediaUrl}>{title}</Link>}
				cover={<img alt={title} src={mediaImageUrl} />}
				extra={vote_average}
			>
				<Card.Meta
					title={<Link to={mediaUrl}>See More...</Link>}
					description={release_date}
				/>
                
			</Card>
		</List.Item>
	);
}