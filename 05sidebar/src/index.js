import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


const routes = [
    {
        path: "/",
        exact: true,
        sidebar: () => <div>home!</div>,
        main: () => <h2>Home</h2>
    },
    {
        path: "/one",
        sidebar: () => <div>one!</div>,
        main: () => <h2>one</h2>
    },
    {
        path: "/two",
        sidebar: () => <div>two!</div>,
        main: () => <h2>two</h2>
    }
];



const App = () => {
    return (
        <>
            <Router>
                {/** （方式一）flex方式：左侧定宽，右侧自适应 */}
                {/* <div style={{ display: 'flex' }}>
                    <div style={{ width: '200px', backgroundColor: 'pink' }}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/one">One</Link>
                            </li>
                            <li>
                                <Link to="/two">Two</Link>
                            </li>
                        </ul>

                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route key={index} exact={route.exact} path={route.path} render={route.sidebar}></Route>
                                })
                            }
                        </Switch>
                    </div>

                    <div style={{ flex: 1 }}>
                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route key={index} exact={route.exact} path={route.path} render={route.main}></Route>
                                })
                            }
                        </Switch>
                    </div>
                </div> */}


                {/** （方式二）float方式：左侧定宽，右侧自适应 */}
                <div style={{ overflow: 'hidden' }}>
                    <div style={{ float: 'left', marginRight: '10px', width: '200px', backgroundColor: 'pink' }}>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/one">One</Link>
                            </li>
                            <li>
                                <Link to="/two">Two</Link>
                            </li>
                        </ul>

                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route key={index} exact={route.exact} path={route.path} render={route.sidebar}></Route>
                                })
                            }
                        </Switch>
                    </div>

                    <div style={{ overflow: 'hidden' }}>
                        <Switch>
                            {
                                routes.map((route, index) => {
                                    return <Route key={index} exact={route.exact} path={route.path} render={route.main}></Route>
                                })
                            }
                        </Switch>
                    </div>
                </div>
            </Router>
        </>
    )
}

ReactDOM.render(<App />, document.querySelector("#root"));