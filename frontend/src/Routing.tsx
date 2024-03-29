import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './page/auth/LoginPage';
import MainPage from './page/main/MainPage';
import NotFoundPage from './page/notFound/NotFoundPage';
import PostDetailPage from './page/postDetail/PostDetailPage';
import TagSearchPage from './page/tagSearch/tagSearchPage';
import WritePage from './page/wrtie/WritePage';
import PostPage from './page/post/postPage';
import ResumePdfPage from './page/resume/ResumePage';
import seriesSearchPage from './page/seriesSearch/seriesSearchPage';
const Routing = () => {
    return (
        <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/write" component={WritePage} />
            <Route exact path="/tag/:tagName" component={TagSearchPage} />
            <Route exact path="/post/:searchUrl" component={PostDetailPage} />
            <Route exact path="/post" component={PostPage} />
            <Route exact path="/resume" component={ResumePdfPage} />
            <Route exact path="/series/:seriesName" component={seriesSearchPage} />
            <Route component={NotFoundPage} />
        </Switch>
    );
};
export default Routing;
