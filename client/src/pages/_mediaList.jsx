import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List } from 'antd';
import _Layout from './_layout';
import {initializeFilms} from 'redux/state/films/actions';
import FilmItem from 'components/FilmItem/FilmItem';

class _MediaList extends Component{

	componentDidMount() {
		this.props.initializeFilms();
	}

	render() {
		return(
			<_Layout pageType={`${this.props.match.path}`} >
				<List
					dataSource={this.props.films}
					grid={{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }}
					renderItem={item => (
						<FilmItem item={item} />
					)}
				/>
			</_Layout>
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