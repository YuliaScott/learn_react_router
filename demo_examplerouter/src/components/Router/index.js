import { Route, Switch } from 'react-router-dom';
import { routers } from './router.config';


const getRoute = (path) => {
    return routers.filter(route => route.path === path)[0];
};

const Router = () => {
    const AppLayout = getRoute('/').component;

    return (
        <Switch>
            <Route path='/' render={(props) => <AppLayout {...props} exact />}></Route>
        </Switch>
    )
}

export default Router;