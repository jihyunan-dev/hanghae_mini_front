import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import Comment from "../components/Comment";
import CategoryBtns from "../components/CategoryBtns";
import ResultBtns from "../components/ResultBtns";

const Main = () => {
  const dispatch = useDispatch();

  const user = { name: "지현" };

  // 메뉴 추천받기!
  const result = () => {
    dispatch(resultAction.getMenuDB());
  };

  return (
    <Container>
      <div>
        <p>{user.name}님의 오늘 점심 추천</p>
        <CategoryBtns />
        <Button _onClick={result} text="메뉴 추천받기" />
        <ResultBtns />
        <Comment />
      </div>
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

export default Main;
