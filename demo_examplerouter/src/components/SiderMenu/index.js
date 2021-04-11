import { Layout, Menu, Icon } from 'antd';
import { appRouters } from '../Router/router.config';
import './index.css';

const { Sider } = Layout;
const { SubMenu } = Menu;

const SiderMenu = ({ collapsed, history }) => {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed} history={history}>
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={[history.location.pathname]}>
                {
                    appRouters
                        .filter(route => !route.isLayout && route.showInMenu)
                        .map((route) => {
                            if (route.children && route.children.length > 0) {
                                return (
                                    <SubMenu
                                        key={route.id + ''}
                                        title={
                                            <span>
                                                <Icon type={route.icon} />
                                                <span>{route.title}</span>
                                            </span>
                                        }
                                    >
                                        {route.children.map((childRoute) => {
                                            return (
                                                <Menu.Item key={childRoute.path} onClick={() => history.push(childRoute.path)}>
                                                    <Icon type={childRoute.icon} />
                                                    <span>{childRoute.title}</span>
                                                </Menu.Item>
                                            );
                                        })}
                                    </SubMenu>
                                )
                            } else {
                                return (<Menu.Item key={route.path} onClick={() => history.push(route.path)}>
                                    <Icon type={route.icon} />
                                    <span>{route.title}</span>
                                </Menu.Item>)
                            }
                        })
                }
            </Menu>
        </Sider>
    )
}

export default SiderMenu;