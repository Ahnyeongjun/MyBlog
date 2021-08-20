import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./page/main/MainPage";
const Routing = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MainPage} />
      </Switch>
    </>
  );
};
export default Routing;
