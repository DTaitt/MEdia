import React, {Component} from 'react';
import {connect} from 'react-redux';
import { List } from 'antd';
import _Layout from './_layout';
import {initializeFonts} from '../redux/state/films/actions';
import FilmItem from '../components/FilmItem/FilmItem';

class _List extends Component{

	componentDidMount() {
		this.props.initializeFonts();
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
	films: state.films,
});

const mapDispatchToProps = ({
	initializeFonts
});

const ConnectedList = connect(mapStateToProps, mapDispatchToProps)(_List);
export default ConnectedList;