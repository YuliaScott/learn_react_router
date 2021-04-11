import { Component, useState } from 'react';
import { Layout, Icon } from 'antd';
import { Route, Switch } from 'react-router-dom';
import SiderMenu from "../SiderMenu";
import { appRouters } from '../Router/router.config';


const { Header, Content } = Layout;

const AppLayout = ({ history }) => {
    const [collapsed, setCollapsed] = useState(false);
    // const [isX, { setTrue, setFalse, toggle }] = useToggle
    const toggle = () => {
        setCollapsed(!collapsed);
    }

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <SiderMenu collapsed={collapsed} history={history} />
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <Icon
                        className='trigger'
                        type={collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={toggle}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        background: '#fff',
                        minHeight: 280,
                    }}
                >
                    <Switch>
                        {
                            appRouters
                                .filter(route => !route.isLayout)
                                .map((route, index) => {
                                    if (route.children && route.children.length > 0) {
                                        return route.children.map((childRoute, childIndex) => {
                                            return <Route key={childIndex} path={childRoute.path} component={childRoute.component} />
                                        })
                                    } else {
                                        return <Route key={index} path={route.path} component={route.component} />
                                    }
                                })
                        }
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default AppLayout;