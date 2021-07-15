import React from "react";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Upload from "../pages/Upload";
import MyPosts from "../pages/MyPosts";
import theme from "./theme";

import GlobalStyles from "./GlobalStyles";
import { Redirect, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as loginActions } from "../redux/modules/user";
import Info from "../pages/Info";

const App = () => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  React.useEffect(() => {
    dispatch(loginActions.loginCheckDB());
  }, []);

  if (!is_login) {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ConnectedRouter history={history}>
          <Header />
          <Route path="/info" exact component={Info} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          <Redirect to="/info" />
        </ConnectedRouter>
      </ThemeProvider>
    );
  }

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
      </ConnectedRouter>
    </ThemeProvider>
  );
};

export default App;
