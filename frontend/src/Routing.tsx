import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/auth/LoginPage';
import MainPage from './page/main/MainPage';
import NotFoundPage from './page/notFound/NotFoundPage';
import PostPage from './page/post/PostPage';
import WritePage from './page/wrtie/WritePage';
const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/write" component={WritePage} />
            <Route path="/post/:searchUrl" component={PostPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
export default Routing;
