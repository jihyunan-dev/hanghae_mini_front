import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as commentActions } from "../redux/modules/comment";

import TextForm from "./TextForm";
import CommentList from "./CommentList";

const Comment = (props) => {
  const dispatch = useDispatch();

  // menuId에 따라서 comment로드, 저장이 달라짐
  const [menuId, setMenuId] = useState(1);
  const [currentComment, setCurrentComment] = useState("");

  useEffect(() => dispatch(commentActions.getCommentDB(menuId)), []);

  const commentList = useSelector((state) => state.comment.list[menuId]) || [];

  const submitComment = (e) => {
    e.preventDefault();

    const commentObj = {
      comment: currentComment,
      menuId: menuId,
    };
    dispatch(commentActions.addCommentDB(commentObj));
  };

  return (
    <>
      <TextForm
        placeholder="댓글을 입력해주세요."
        value={currentComment}
        _onSubmit={submitComment}
        _onChange={(e) => setCurrentComment(e.target.value)}
      />
      <CommentList menuId={menuId} list={commentList} />
    </>
  );
};

export default Comment;
