import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

import Template from 'pages/template';
import { initializeFilms } from 'redux/state/films/actions';
import MediaItem from 'components/MediaItem/MediaItem';
import {initializeShows} from '../../redux/state/shows/actions';
import withMedia from 'utilities/hoc';

class _MediaList extends PureComponent{
	render() {
		return(
			<Template >
				<List
					dataSource={this.props.data}
					grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					renderItem={item => (
						<MediaItem item={item} />
					)}
				/>
			</Template>
		);
	}
}

export default withMedia(_MediaList, '/films');