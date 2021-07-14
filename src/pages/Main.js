import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import CategoryBtns from "../components/CategoryBtns";
import Result from "../components/Result";
import { container } from "../mixin/container";

const Main = () => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);

  // user name 받아오기
  const user = useSelector((state) => state.user.user);
  console.log(user.nickname);

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

  if (is_login) {
    return (
      <Container>
        <Div>
          <p>{user.nickname}님의 오늘 점심 추천</p>
          <CategoryBtns setCategory={setCategory} />
          <Button width="40%" _onClick={getResults} text="메뉴 추천받기" />
          <Result category={category} />
        </Div>
        <div>
          <Rank />
        </div>
      </Container>
    );
  }
  return (
    <Container>
      <Rank />
      <Div>
        {/* 로그인 아닐때 user.name이 공란인 것에 대한 멘트 생각 */}
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
