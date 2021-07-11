import React from "react";
import TextForm from "./TextForm";
import CommentList from "./CommentList";

const Comment = (props) => {
  return (
    <>
      <TextForm placeholder="댓글을 입력해주세요." />
      <CommentList />
    </>
  );
};

export default Comment;
