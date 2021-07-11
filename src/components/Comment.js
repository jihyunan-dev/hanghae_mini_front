import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreator as CommentActions } from "../redux/modules/comment";

import TextForm from "./TextForm";
import CommentList from "./CommentList";

const Comment = (props) => {
  const dispatch = useDispatch();

  const [currentComment, setCurrentComment] = useState("");

  const submitComment = (e) => {
    e.preventDefault();

    const commentObj = {
      comment: currentComment,
      menuId: "13", // 나중에 받아온 menu의 Id를 파악해서 넣어주면 됨
    };
    dispatch(CommentActions.addCommentDB(commentObj));
  };

  return (
    <>
      <TextForm
        placeholder="댓글을 입력해주세요."
        _onSubmit={submitComment}
        _onChange={(e) => setCurrentComment(e.target.value)}
      />
      <CommentList />
    </>
  );
};

export default Comment;
