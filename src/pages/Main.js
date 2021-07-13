import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result";
import { Button } from "../elements";

import Rank from "../components/Rank";
import CategoryBtns from "../components/CategoryBtns";
import Result from "../components/Result";

const Main = () => {
  const dispatch = useDispatch();

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
