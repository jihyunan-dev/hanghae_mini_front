import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import Comment from "../components/Comment";
import CategoryBtns from "../components/CategoryBtns";
import ResultBtns from "../components/ResultBtns";
import { container } from "../mixin/container";

const Main = () => {
  const dispatch = useDispatch();
  const user = { name: "지현" };

  // 메뉴 추천받기!
  const result = () => {
    dispatch(resultAction.getMenuDB());
  };

  return (
    <Container>
      <Rank />
      <Div>
        <Title>{user.name}님의 오늘 점심 추천</Title>
        <CategoryBtns />
        <Button _onClick={result} text="메뉴 추천받기" />
        <ResultBtns />
        <Comment />
      </Div>
    </Container>
  );
};

const Container = styled.div`
  ${container};
`;

// 이름 바꿔야함..
const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  margin-bottom: ${({ theme }) => theme.paddings.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: 600;
`;

export default Main;
