import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Layout, Menu, Icon} from 'antd';

const { Header, Content, Footer, Sider } = Layout;

export default class _Layout extends Component{
	render() {
		return(
			<Layout style={{height: '100vh'}}>
				<Sider
					breakpoint="lg"
					collapsedWidth="0"
				>
					<div className="logo" />
					<Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
						<Menu.Item key="1">
							<Icon type="home" />
							<span className="nav-text">
								<Link to='/'>Home</Link>
							</span>
						</Menu.Item>
						<Menu.Item key="2">
							<Icon type="video-camera" />
							<span className="nav-text">
								<Link to='/films'>Films</Link>
							</span>
						</Menu.Item>
						<Menu.Item key="3">
							<Icon type="info-circle-o" />
							<span className="nav-text">
								<Link to='/about'>About</Link>
							</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }}>{this.props.pageType}</Header>
					<Content style={{ margin: '24px 16px 0' }}>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
							{this.props.children}
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2016 Created by Ant UED
					</Footer>
				</Layout>
			</Layout>
		);
	}
}