import React from 'react';
import ReactDOM from 'react-dom/client';
// import Home from './containers/Home';
import GlobalStyle from './globalStyle';
import Users from './containers/User'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Users/>,
        <GlobalStyle/>
    </>
);

