import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useDispatch } from "react-redux";
import { actionCreator as commentActions } from "../redux/modules/comment";
import TextForm from "./TextForm";

const CommentBox = (props) => {
  const dispatch = useDispatch();
  const { comment: text, nickname } = props.comment;
  const commentId = props.comment.commentId;

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
      <Box>
        <TextForm
          btn={false}
          value={newComment}
          _onChange={(e) => setNewComment(e.target.value)}
          _onSubmit={editComment}
        />
        <Btns>
          <TextBtn onClick={convertEditMode}>취소</TextBtn>
          <TextBtn onClick={editComment}>완료</TextBtn>
        </Btns>
      </Box>
    );
  }

  return (
    <Box>
      <Content>
        <Nickname>{nickname}</Nickname>
        <Text>{text}</Text>
      </Content>
      {/* 본인이 쓴 댓글인 경우에만 수정, 삭제 */}

      <Btns>
        <TextBtn onClick={convertEditMode}>수정</TextBtn>
        <TextBtn onClick={deleteComment}>삭제</TextBtn>
      </Btns>
    </Box>
  );
};

const Box = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  border-top: none;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const fontSB = css`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

const Nickname = styled.h6`
  ${fontSB};
  margin-bottom: 7px;
  color: gray;
`;

const Text = styled.p`
  ${fontSB};
  padding: 5px;
  padding-left: 10px;
`;

const Btns = styled.div`
  flex-shrink: 0;
`;

const TextBtn = styled.button`
  ${fontSB};
  height: 100%;
  padding: 10px;
`;

export default CommentBox;
