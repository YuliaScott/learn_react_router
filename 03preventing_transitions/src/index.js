import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link, Switch, Prompt } from 'react-router-dom';


const BlockingForm = () => {
    const [isBlocking, setIsBlocking] = useState(false);

    return (
        <form
            onSubmit={(event) => {
                event.preventDefault();
                event.target.reset();
                setIsBlocking(false);
            }}>

            <Prompt
                when={isBlocking}
                message={(location) => {
                    return `你确定前往${location.pathname}`
                }}
            >
            </Prompt>

            <p>
                Blocking?{" "}
                {isBlocking ? "Yes, 进行阻止" : "No, 不进行阻止"}
            </p>
            <p>
                <input
                    size={50}
                    placeholder="请输入一些内容"
                    onChange={(event) => {
                        setIsBlocking(event.target.value.length > 0);
                    }}
                />
            </p>
            <p>
                <button>提交</button>
            </p>
        </form>
    )
}


const App = () => {
    return (
        <Router>
            <React.Fragment>
                <ul>
                    <li>
                        <Link to="/">Form</Link>
                    </li>
                    <li>
                        <Link to="/one">One</Link>
                    </li>
                    <li>
                        <Link to="/two">Two</Link>
                    </li>
                </ul>
            </React.Fragment>

            <Switch>
                <Route exact path="/" component={BlockingForm} />
                <Route path="/one" render={() => { return <h1>one</h1> }} />
                <Route path="/two" render={() => { return <h1>two</h1> }} />
            </Switch>
        </Router>
    )
}


ReactDOM.render(<App />, document.querySelector("#root"));