// import React, { PureComponent } from 'react';
// import { connect } from 'react-redux';

// import { initializeFilms } from 'redux/state/films/actions';
// import { initializeShows } from 'redux/state/shows/actions';

// export default function withMedia(MediaList, mediaType) {
// 	class withMedia extends PureComponent{

// 		constructor(props) {
// 			super(props);
// 			this.state = {
// 				data: null,
// 			};
// 		}

// 		async componentDidMount() {
// 			switch (this.props.location.pathname) {
// 			case '/films':
// 				await this.props.initializeFilms();
// 				this.setState({data: this.props.films});
// 				break;
// 			case '/shows':
// 				await this.props.initializeShows();
// 				this.setState({data: this.props.shows});
// 				break;
// 			default:
// 				await this.props.initializeFilms();
// 				this.setState({data: this.props.films});
// 			}
// 		}

// 		render() {
// 			return (
// 				this.state.data ? <MediaList data={this.state.data} /> : null
// 			);
// 		}
// 	};

// 	const mapStateToProps = state => ({
// 		films: state.films.data,
// 		shows: state.shows.data,
// 	});

// 	const mapDispatchToProps = ({
// 		initializeFilms,
// 		initializeShows
// 	});

// 	return connect(mapStateToProps, mapDispatchToProps)(withMedia);
// }