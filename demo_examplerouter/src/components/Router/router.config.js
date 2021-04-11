import LoadableComponent from '../Loadable/index';

export const appRouters = [
    {
        path: '/',
        exact: true,
        title: 'Home',
        icon: 'home',
        component: LoadableComponent(() => import('../../components/Layout/AppLayout')),
        isLayout: true,
        showInMenu: false,
        children: []
    },
    {
        path: '/user',
        exact: false,
        title: 'User',
        icon: 'user',
        component: LoadableComponent(() => import('../../scenes/User')),
        isTest: true,
        isLayout: false,
        showInMenu: true,
        children: []
    },
    {
        path: '/role',
        exact: false,
        title: 'Role',
        icon: 'tags',
        component: LoadableComponent(() => import('../../scenes/Role')),
        isTest: true,
        isLayout: false,
        showInMenu: true,
        children: []
    },
    {
        path: '/log',
        exact: false,
        title: 'Log',
        icon: 'bars',
        isLayout: false,
        showInMenu: true,
        children: [{
            path: '/loginlog',
            exact: false,
            title: 'LoginLog',
            icon: 'login',
            component: LoadableComponent(() => import('../../scenes/LoginLog')),
            isLayout: false,
            showInMenu: true,
        }, {
            path: '/errorlog',
            exact: false,
            title: 'ErrorLog',
            icon: 'close',
            component: LoadableComponent(() => import('../../scenes/ErrorLog')),
            isLayout: false,
            showInMenu: true,
        }]
    }
];

export const routers = [...appRouters];