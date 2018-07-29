import React, {Component} from 'react';
import {connect} from 'react-redux';
import _Layout from './_layout';
import {initializeFonts} from '../redux/state/films/actions';

class ListPage extends Component{

	async componentDidMount() {
		this.props.initializeFonts();
	}
	
	render() {
		return(
			<_Layout pageType={`${this.props.match.path}`} >
				<p>{`I'm from the ${this.props.match.path} page`}</p>
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

const ConnectedListPage = connect(mapStateToProps, mapDispatchToProps)(ListPage);
export default ConnectedListPage;