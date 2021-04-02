import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './AppComponent';

ReactDOM.render(
  <React.StrictMode>
    {/* -- App包裹的子组件, 使用`useParams` hook获取值 -- */}
    {/* <App /> */}

    {/* -- AppComponent使用component传递子组件, 传值方式 -- */}
    <AppComponent />
  </React.StrictMode>,
  document.getElementById('root')
);
