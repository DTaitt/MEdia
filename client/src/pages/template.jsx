import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon, Breadcrumb } from 'antd';
import { withRouter } from 'react-router';
import { capitalizeFirstLetter, createBreadcrumbs } from '../utilities/utilities';

const { Header, Content, Footer, Sider } = Layout;

function Template(props){
	const crumbs = createBreadcrumbs(props.mediaTitle, props.location.pathname);
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
						<Icon type="laptop" />
						<span className="nav-text">
							<Link to='/shows'>TV</Link>
						</span>
					</Menu.Item>
					<Menu.Item key="4">
						<Icon type="info-circle-o" />
						<span className="nav-text">
							<Link to='/about'>About</Link>
						</span>
					</Menu.Item>
					<Menu.Item key="5">
						<Icon type="user" />
						<span className="nav-text">
							<Link to='/profile'>Profile</Link>
						</span>
					</Menu.Item>
				</Menu>
			</Sider>
			<Layout>
				<Header style={{ background: '#001529', padding: 0}}>
					<h1 style={{textAlign: 'center', color: 'white'}} >My Media</h1>
				</Header>
				<Content style={{ margin: '24px 16px 0' }}>
					<div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
						<Breadcrumb>
							<Breadcrumb.Item>
								<Link to={'/'} >Home</Link>
							</Breadcrumb.Item>
							{crumbs.slice(0, crumbs.length - 1).map(crumb => {
								return (
									<Breadcrumb.Item key={crumb}>
										<Link to={`/${crumb}`} >{capitalizeFirstLetter(crumb)}</Link>
									</Breadcrumb.Item>
								);
							})}
							<Breadcrumb.Item>
								{capitalizeFirstLetter(crumbs[crumbs.length - 1])}
							</Breadcrumb.Item>
						</Breadcrumb>
						{props.children}
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
				Ant Design ©2016 Created by Ant UED
				</Footer>
			</Layout>
		</Layout>
	);
}

export default withRouter(Template);