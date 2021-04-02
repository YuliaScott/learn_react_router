
import React from 'react';
import { Redirect } from 'react-router-dom';
import fakeAuth from '../api/fakeAuth';

class LoginPage extends React.Component {

    state = { redirectToReferrer: false };

    login = () => {
        fakeAuth.signin(() => {
            this.setState({
                redirectToReferrer: true
            })
        });
    }

    render() {
        let { from } = this.props.location.state || { from: { pathname: '/' } };
        let { redirectToReferrer } = this.state;

        if (redirectToReferrer) return <Redirect to={from} />;

        return (
            <div>
                <p>You must log in to view the page at {from.pathname}</p>
                <button onClick={this.login}>Log in</button>
            </div>
        )
    }
}

export default LoginPage;