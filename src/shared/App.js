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
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { actionCreators as resultActions } from "../redux/modules/result";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 여기서 인기 점심 메뉴를 한 번 불러오기
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/upload" component={Upload} />
          {/* <Route path="/edit/:postId" component={Edit}/> */}
          <Route path="/posts/:userId" component={MyPosts} />
          {/* <Route component={ErrorPage} /> */}
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
