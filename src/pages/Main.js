import React, { useState } from "react";
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
    <div>
      <p>{user.name}님의 오늘 점심 추천</p>
      <CategoryBtns />
      <Button _onClick={result} text="메뉴 추천받기" />
      <ResultBtns />
      <Comment />
      <Rank />
    </div>
  );
};

export default Main;
