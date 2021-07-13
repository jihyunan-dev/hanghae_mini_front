import React from "react";
import Header from "../components/Header";

import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Upload from "../pages/Upload";
import MyPosts from "../pages/MyPosts";

import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";

const App = () => {
  return (
    <>
      <GlobalStyles />

      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/upload" component={Upload} />
        <Route path="/upload/:id" component={Upload} />
        <Route path="/mypost" component={MyPosts} />
        {/* <Route component={ErrorPage} /> */}
      </ConnectedRouter>
    </>
  );
};

export default App;
