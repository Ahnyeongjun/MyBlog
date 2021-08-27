import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from './page/main/MainPage';
import WritePage from './page/wrtie/WritePage';
const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/write" component={WritePage} />
        </Switch>
    );
};
export default Routing;
