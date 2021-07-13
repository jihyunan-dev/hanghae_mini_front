import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../elements";
import { actionCreator as commentActions } from "../redux/modules/comment";
import TextForm from "./TextForm";

const CommentBox = (props) => {
  const dispatch = useDispatch();
  const { nickname, comment: text, id } = props.comment;
  const commentId = props.comment.id || props.comment.commentId;

  const [editMode, setEditMode] = useState(false);

  const convertEditMode = () => {
    setNewComment(text);
    setEditMode(!editMode);
  };

  const [newComment, setNewComment] = useState(text);

  let menuId = 1;

  const editComment = (e) => {
    e.preventDefault();
    dispatch(commentActions.editCommentDB(menuId, commentId, newComment));
    convertEditMode();
  };

  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(menuId, commentId));
  };

  if (editMode) {
    return (
      <article>
        <TextForm
          btnName="저장"
          value={newComment}
          _onChange={(e) => setNewComment(e.target.value)}
          _onSubmit={editComment}
        />
        <Button text="취소" _onClick={convertEditMode} />
      </article>
    );
  }

  return (
    <article>
      <h6>{nickname}</h6>
      <p>{text}</p>
      {/* 본인이 쓴 댓글인 경우에만 수정, 삭제 */}

      <Button text="수정" _onClick={convertEditMode} />
      <Button text="삭제" _onClick={deleteComment} />
    </article>
  );
};

export default CommentBox;
