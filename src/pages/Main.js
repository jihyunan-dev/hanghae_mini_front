import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import CategoryBtns from "../components/CategoryBtns";
import Result from "../components/Result";
import { container } from "../mixin/container";

const Main = () => {
  const dispatch = useDispatch();
  const user = { name: "지현" };

  const [category, setCategory] = useState({
    category1: null,
    category2: null,
    category3: null,
  });

  // 메뉴 추천받기!
  const getResults = () => {
    const { category1, category2, category3 } = category;
    if (!category1 || !category2 || !category3) {
      alert("카테고리를 모두 선택해 주세요.");
      return;
    }
    dispatch(resultAction.getMenuDB(category));
  };

  return (
    <Container>
      <Rank />
      <Div>
        <Title>{user.name}님의 오늘 점심 추천</Title>
        <CategoryBtns setCategory={setCategory} />
        <Button btnName="submit" _onClick={getResults} text="메뉴 추천받기" />
        <Result category={category} />
      </Div>
    </Container>
  );
};

const Container = styled.div`
  ${container};
  margin-top: 50px;
  ${({ theme }) => theme.device.desktop} {
    max-width: 1000px;
  }
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
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export default Main;
