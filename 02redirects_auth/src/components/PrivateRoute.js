import { Route, Redirect } from 'react-router-dom';
import fakeAuth from '../api/fakeAuth';

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                return fakeAuth.isAuthenticated ? (<Component {...rest} />) : (<Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                />)
            }}
        />
    )
}

export default PrivateRoute;