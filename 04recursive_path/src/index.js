import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom'; //Link,

const PEEPS = [
    { id: 0, name: "Michelle", friends: [1, 2, 3] },
    { id: 1, name: "Sean", friends: [0, 3] },
    { id: 2, name: "Kim", friends: [0, 1, 3] },
    { id: 3, name: "David", friends: [1, 2] }
];

const find = (id) => {
    return PEEPS.find(p => p.id === id);
}


const Person = (props) => {
    console.log(props);

    let data = find(parseInt(props.match.params.id));

    return (
        <div>
            <h2>{data.name}'s friends</h2>
            <ul>
                {
                    data.friends.map((fid, index) => {
                        return (
                            <li key={index}>
                                <Link to={`${props.match.url}/${fid}`}>{find(fid).name}</Link>
                            </li>
                        )
                    })
                }
            </ul>

            <Switch>
                <Route path={`${props.match.url}/:id`} component={Person} />
            </Switch>
        </div>
    )
}


const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/:id" component={Person}></Route>
                <Redirect from="/" to="/0" />
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App />, document.querySelector("#root"));