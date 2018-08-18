import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

import Template from 'pages/template';
import { initializeFilms } from 'redux/state/films/actions';
import MediaItem from 'components/MediaItem/MediaItem';

class _MediaList extends PureComponent{

	componentDidMount() {
		this.props.initializeFilms();
	}

	render() {
		return(
			<Template pageType={`${this.props.match.path}`} >
				<List
					dataSource={this.props.films}
					grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					renderItem={item => (
						<MediaItem item={item} />
					)}
				/>
			</Template>
		);
	}
}

const mapStateToProps = state => ({
	films: state.films.data,
	hasBeenLoaded: state.films.hasBeenLoaded
});

const mapDispatchToProps = ({
	initializeFilms
});

const ConnectedMediaList = connect(mapStateToProps, mapDispatchToProps)(_MediaList);
export default ConnectedMediaList;