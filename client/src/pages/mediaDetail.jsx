import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { initializeFilms } from 'redux/state/films/actions';
import { initializeShows } from 'redux/state/shows/actions';
import { setCurrentMedia } from 'redux/state/currentMedia/actions.';
import Template from './template';
import { 
	parseUrlId, 
	parseBreadcrumbPath, 
	updateMedia 
} from 'utilities/utilities';

class _MediaDetail extends PureComponent{

	constructor(props) {
		super();
		this.state = {};
		this.fetchMedia = this.fetchMedia.bind(this);
		this.setMedia = this.setMedia.bind(this);
	}

	componentDidMount() {
		this.props.hasCurrentMediaBeenSet === false && this.fetchMedia();
	}

	async fetchMedia() {
		const [pageType] = parseBreadcrumbPath(this.props.pathname);
		switch (pageType) {
		case 'films':
			await this.props.initializeFilms();
			this.setMedia(this.props.films);
			break;
		case 'shows':
			await this.props.initializeShows();
			this.setMedia(this.props.shows);
			break;
		default:
			this.setState({data:[]});
		}
	}

	setMedia(mediaArray) {
		const [media] = mediaArray.filter(media => {
			return media.id.toString() === parseUrlId(this.props.pathname);
		});
		const updatedMedia = updateMedia(media);
		this.props.setCurrentMedia(updatedMedia);
	}

	render() {
		return(
			<Template pageType={`${this.props.pathname}`} mediaTitle={this.props.currentMedia.mediaTitle} >
				<Card 
					title={this.props.currentMedia.mediaTitle}
					cover={<img alt={this.props.currentMedia.mediaTitle} src={this.props.currentMedia.imageUrl} />}
					extra={this.props.currentMedia.vote_average}
				>
					<Card.Meta />
					<p>{this.props.currentMedia.overview}</p>
					<p>{this.props.currentMedia.vote_count} votes</p>
					<p>{this.props.currentMedia.popularity} popularity</p>
				</Card>
			</Template>
		);
	}
}

const mapStateToProps = state => ({
	films: state.films.data,
	shows: state.shows.data,
	pathname: state.router.location.pathname,
	currentMedia: state.currentMedia.data,
	hasCurrentMediaBeenSet: state.currentMedia.hasBeenSet,
});

const mapDispatchToProps = ({
	initializeFilms,
	initializeShows,
	setCurrentMedia,
});

const ConnectedMediaDetail = connect(mapStateToProps, mapDispatchToProps)(_MediaDetail);
export default ConnectedMediaDetail;