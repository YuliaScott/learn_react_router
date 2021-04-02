import {withRouter} from 'react-router-dom';
import fakeAuth from '../api/fakeAuth';

const AuthButton = ({ history }) => {
    return (
        fakeAuth.isAuthenticated ? (
            <p>
                welocome!
                <button
                    onClick={() => {
                        fakeAuth.signout(() => history.push("/"));
                    }}
                >
                    Sign out
                </button>
            </p>
        ) : (<p>You are not logged in.</p>)
    )
}

//高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中.
//withRouter的作用就是, 如果我们某个东西不是一个Router, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter.
export default withRouter(AuthButton); 