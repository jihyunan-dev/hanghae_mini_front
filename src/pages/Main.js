import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button, Title } from "../elements";

import Rank from "../components/Rank";
import CategoryBtns from "../components/CategoryBtns";
import Result from "../components/Result";
import { container } from "../mixin/container";

const Main = () => {
  const dispatch = useDispatch();

  // user name 받아오기
  const user = useSelector((state) => state.user.user);
  const [category, setCategory] = useState({
    category1: "채식",
    category2: "식사",
    category3: "한식",
  });

  useEffect(() => {
    return dispatch(resultAction.resetCurrentMenu());
  }, []);

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
      <Div>
        <Title center={true}>
          {user ? `${user.nickname}님의 오늘 점심 추천` : "오늘 점심 추천"}
        </Title>
        <CategoryBtns setCategory={setCategory} />
        <Button btnName="submit" _onClick={getResults} text="메뉴 추천받기" />
        <Result category={category} />
      </Div>
      <Rank />
    </Container>
  );
};

const Container = styled.div`
  ${container};
  margin-top: 10px;

  ${({ theme }) => theme.device.tablet} {
    margin-top: 50px;
  }

  ${({ theme }) => theme.device.desktop} {
    max-width: 1000px;
    margin: 50 auto;
  }
  display: flex;
  justify-content: space-around;
`;

// 이름 바꿔야함..
const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default Main;
