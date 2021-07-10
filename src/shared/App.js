import React from "react";
import Header from "../components/Header";

import Register from "../pages/Register";
import Login from "../pages/Login";
import Upload from "../pages/Upload";

import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Main from "../pages/Main";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          {/* <Route path="/result/:menuId" coponent={Result} /> */}
          <Route path="/upload" component={Upload} />
          {/* <Route path="/edit/:postId" component={Edit}/> */}
          {/* <Route path="/posts/userId" component={MyPosts} /> */}
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
