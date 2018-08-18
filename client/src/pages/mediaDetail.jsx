import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Card } from 'antd';

import { initializeFilms } from 'redux/state/films/actions';
import { parseURlId, URL } from 'utilities/utilities';
import Template from './template';

class _MediaDetail extends PureComponent{

	constructor(props) {
		super();
		this.state = {
			media: null,
			hasMediaBeenSet: false,
		};
	}

	async componentDidMount() {
		await this.props.initializeFilms();
		this.setMedia();
	}

	setMedia() {
		const [media] = this.props.films.filter(film => {
			return film.id.toString() === parseURlId(this.props.pathname);
		});
		this.setState({
			media, 
			hasMediaBeenSet: true
		});
	}

	render() {
		return(
			this.state.hasMediaBeenSet 
				? (
					<Template pageType={`${this.props.pathname}`} mediaTitle={this.state.media.title} >
						<Card 
							title={this.state.media.title}
							cover={<img alt={this.state.media.title} src={`${URL.IMGPREFIX}${this.state.media.poster_path}`} />}
							extra={this.state.media.vote_average}
						>
							<Card.Meta />
							<p>{this.state.media.overview}</p>
							<p>{this.state.media.vote_count} votes</p>
							<p>{this.state.media.popularity} popularity</p>
						</Card>
					</Template>
				) 
				: null
		);
	}
}

const mapStateToProps = state => ({
	films: state.films.data,
	hasBeenLoaded: state.films.hasBeenLoaded,
	pathname: state.router.location.pathname
});

const mapDispatchToProps = ({
	initializeFilms
});

const ConnectedMediaDetail = connect(mapStateToProps, mapDispatchToProps)(_MediaDetail);
export default ConnectedMediaDetail;