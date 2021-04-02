import { Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import AuthButton from './components/AuthButton';
import PublicPage from './pages/PublicPage';
import LoginPage from './pages/LoginPage';
import ProtectedPage from './pages/ProtectedPage';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <Fragment>
        <AuthButton />
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected">Protected Page</Link></li>
        </ul>
        

        <Switch>
          <Route path="/public" component={PublicPage} />
          <Route path="/login" component={LoginPage} />
          <PrivateRoute path="/protected" component={ProtectedPage} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
