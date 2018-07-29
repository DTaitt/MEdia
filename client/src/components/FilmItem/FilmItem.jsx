import React, { Component } from 'react';
import { List, Avatar, Card } from 'antd';
import {Link} from 'react-router-dom';
import {url} from '../../utilities/utilities';

export default class FilmItem extends Component{
	render() {
		return (
			<List.Item>
				<Card 
					title={<Link to={`/films/${this.props.item.title}`}>{this.props.item.title}</Link>}
					cover={<img alt="example" src={`${url.imgPrefix}${this.props.item.poster_path}`} />}
					extra={this.props.item.vote_average}
				>
					<Card.Meta
						title={<Link to={`/films/${this.props.item.title}`}>See More...</Link>}
						description={this.props.item.release_date}
					/>
                
				</Card>
			</List.Item>
		);
	}
}