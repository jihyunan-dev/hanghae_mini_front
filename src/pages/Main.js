import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import Comment from "../components/Comment";
import CategoryBtns from "../components/CategoryBtns";
import ResultBtns from "../components/ResultBtns";

const Main = () => {
  const dispatch = useDispatch();

  // user name 받아오기
  const user = useSelector((state) => state.user.user);
  console.log(user.nickname);

  // 메뉴 추천받기!
  const result = () => {
    dispatch(resultAction.getMenuDB());
  };

  return (
    <Container>
      <Div>
        <p>{user.nickname}님의 오늘 점심 추천</p>
        <CategoryBtns />
        <Button width="40%" _onClick={result} text="메뉴 추천받기" />
        <ResultBtns />
        <Comment />
      </Div>
      <div>
        <Rank />
      </div>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;

// 이름 바꿔야함..
const Div = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;
