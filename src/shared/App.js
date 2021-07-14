import React, { useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Upload from "../pages/Upload";
import MyPosts from "../pages/MyPosts";
import theme from "./theme";

import GlobalStyles from "./GlobalStyles";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useSelector } from "react-redux";

const App = () => {
  const is_login = useSelector((state) => state.user.is_login);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Header />
        <Route path="/" exact component={Main} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/upload" exact component={Upload} />
        <Route path="/upload/:id" exact component={Upload} />
        <Route path="/mypost" exact component={MyPosts} />
        {/* <Route component={ErrorPage} /> */}
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
