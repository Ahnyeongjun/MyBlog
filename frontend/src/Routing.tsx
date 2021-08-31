import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/auth/LoginPage';
import MainPage from './page/main/MainPage';
import NotFoundPage from './page/notFound/NotFoundPage';
import WritePage from './page/wrtie/WritePage';
import AdminPage from './page/admin/AdminPage';
const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/admin" component={AdminPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/write" component={WritePage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
export default Routing;
