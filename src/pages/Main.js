import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator as CommentActions } from "../redux/modules/comment";
import { Button } from "../elements";

import Rank from "../components/Rank";
import Comment from "../components/Comment";
import CategoryBtns from "../components/CategoryBtns";
import ResultBtns from "../components/ResultBtns";

const Main = () => {
  const dispatch = useDispatch();
  const user = { name: "지현" };

  const [currentComment, setCurrentComment] = useState("");

  const submitComment = () => {
    const commentObj = {
      comment: currentComment,
      menuId: "4", // 나중에 받아온 menu의 Id를 파악해서 넣어주면 됨
    };
    console.log(commentObj);
    dispatch(CommentActions.addCommentDB(commentObj));
  };

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
