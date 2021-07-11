import React, { useState } from "react";
import { Button } from "../elements";

import Rank from "../components/Rank";
import Comment from "../components/Comment";
import CategoryBtns from "../components/CategoryBtns";
import ResultBtns from "../components/ResultBtns";

const Main = () => {
  const user = { name: "지현" };

  return (
    <div>
      <p>{user.name}님의 오늘 점심 추천</p>
      <CategoryBtns />
      <Button text="메뉴 추천받기" />
      <ResultBtns />
      <Comment />
      <Rank />
    </div>
  );
};

export default Main;
