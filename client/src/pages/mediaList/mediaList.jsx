import React, {PureComponent} from 'react';
import { connect } from 'react-redux';
import { List } from 'antd';

import Template from 'pages/template';
import { initializeFilms } from 'redux/state/films/actions';
import { initializeShows } from 'redux/state/shows/actions';
import MediaItem from 'components/MediaItem/MediaItem';

class _MediaList extends PureComponent{
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
		this.fetchMedia = this.fetchMedia.bind(this);
	}

	componentDidMount() {
		this.fetchMedia();
	}

	componentDidUpdate(prevProps) {
		this.props.pathname !== prevProps.pathname && this.fetchMedia();
	}

	async fetchMedia() {
		switch (this.props.pathname) {
		case '/films':
			await this.props.initializeFilms();
			this.setState({data: this.props.films});
			break;
		case '/shows':
			await this.props.initializeShows();
			this.setState({data: this.props.shows});
			break;
		default:
			this.setState({data:[]});
		}
	}

	render() {
		return(
			this.state.data 
				? <Template>
					<List
						dataSource={this.state.data}
						grid={{ gutter: 16, xs: 1, sm: 2, md: 2, lg: 3, xl: 6, xxl: 3 }}
						renderItem={item => (
							<MediaItem 
								item={item} 
								pageType={`${this.props.pathname.split('/')[1]}`}  
							/>
						)}
					/>
				</Template>
				: null
		);
	}
}

const mapStateToProps = state => ({
	films: state.films.data,
	shows: state.shows.data,
	pathname: state.router.location.pathname,
});

const mapDispatchToProps = ({
	initializeFilms,
	initializeShows,
});

const ConnectedMediaList = connect(mapStateToProps, mapDispatchToProps)(_MediaList);
export default ConnectedMediaList;