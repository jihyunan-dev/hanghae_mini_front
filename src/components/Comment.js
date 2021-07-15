import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreator as commentActions } from "../redux/modules/comment";

import TextForm from "./TextForm";
import CommentList from "./CommentList";

const Comment = (props) => {
  const { menuId } = props;
  const dispatch = useDispatch();

  const [currentComment, setCurrentComment] = useState("");

  useEffect(() => dispatch(commentActions.getCommentDB(menuId)), []);

  const totalComments = useSelector((state) => state.comment.list) || [];
  const commentList = totalComments.filter(
    (comment) => comment.menuId === menuId
  );

  const submitComment = (e) => {
    e.preventDefault();

    const commentObj = {
      comment: currentComment,
      menuId: menuId,
    };
    dispatch(commentActions.addCommentDB(commentObj));
    setCurrentComment("");
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
