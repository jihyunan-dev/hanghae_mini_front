import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "../elements";
import { actionCreator as commentActions } from "../redux/modules/comment";

const CommentBox = (props) => {
  const dispatch = useDispatch();
  const { nickname, comment: text } = props.comment;
  const commentId = props.comment.id || props.comment.commentId;

  const [editMode, setEditMode] = useState(false);
  const convertEditMode = () => setEditMode(!editMode);

  let menuId = 1;

  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(menuId, commentId));
  };

  return (
    <article>
      <h6>{nickname}</h6>
      <p>{text}</p>
      {/* 본인이 쓴 댓글인 경우에만 수정, 삭제 */}
      {editMode ? (
        <Button text="완료" />
      ) : (
        <Button text="수정" _onClick={convertEditMode} />
      )}
      {editMode ? (
        <Button text="취소" _onClick={convertEditMode} />
      ) : (
        <Button text="삭제" _onClick={deleteComment} />
      )}
    </article>
  );
};

export default CommentBox;
