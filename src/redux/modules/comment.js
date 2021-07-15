import { createAction, handleActions } from "redux-actions";
import produce from "immer";

import { api } from "../../shared/api";

// action type
const SET_COMMENT = "comment/SET_COMMENT";
const ADD_COMMENT = "comment/ADD_COMMENT";
const EDIT_COMMENT = "comment/EDIT_COMMENT";
const DELETE_COMMENT = "comment/DELETE_COMMENT";

// action creator
const setComment = createAction(SET_COMMENT, (comments) => ({
  comments,
}));

const addComment = createAction(ADD_COMMENT, (comment) => ({ comment }));
const editComment = createAction(
  EDIT_COMMENT,
  (menuId, commentId, newComment) => ({
    menuId,
    commentId,
    newComment,
  })
);
const deleteComment = createAction(DELETE_COMMENT, (menuId, commentId) => ({
  menuId,
  commentId,
}));

// thunk
const getCommentDB =
  (menuId) =>
  (dispatch, getState, { history }) => {
    api
      .get(`/comments/comments?menuId=${menuId}`)
      .then((res) => {
        dispatch(setComment(res.data.result));
      })
      .catch((err) => console.log(err));
  };

const addCommentDB =
  (comment) =>
  (dispatch, getState, { history }) => {
    const { nickname, id: userId } = getState().user.user;
    const body = { ...comment, nickname, userId };
    api.post("/comments/comments", body).then((res) => {
      const id = res.data.result.id;
      dispatch(addComment({ ...body, commentId: id, nickname }));
    });
  };

const editCommentDB =
  (menuId, commentId, newComment) =>
  (dispatch, getState, { history }) => {
    const { id } = getState().user.user;
    const obj = { description: newComment, userId: id };
    api
      .put(`comments/comments/${commentId}`, obj)
      .then((res) => {
        dispatch(editComment(menuId, commentId, newComment));
      })
      .catch((err) => console.log("댓글 수정 실패", err));
  };

const deleteCommentDB =
  (menuId, commentId) =>
  (dispatch, getState, { history }) => {
    api
      .delete(`/comments/comments/${commentId}`)
      .then((res) => dispatch(deleteComment(menuId, commentId)))
      .catch((err) => console.log("댓글 삭제 실패", err));
  };

// initialState
const initialState = {
  list: [],
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const newList = action.payload.comments.map((item) => {
          const {
            id: commentId,
            menuId,
            comment,
            User: { nickname },
          } = item;

          const commentObj = {
            commentId,
            menuId,
            comment,
            nickname,
          };
          return commentObj;
        });
        draft.list = newList;
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comment);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const { commentId, newComment } = action.payload;
        draft.list = draft.list.map((item) =>
          item.commentId === commentId ? { ...item, comment: newComment } : item
        );
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const { commentId } = action.payload;
        draft.list = draft.list.filter((item) => item.commentId !== commentId);
      }),
  },
  initialState
);

export const actionCreator = {
  getCommentDB,
  addCommentDB,
  editCommentDB,
  deleteCommentDB,
};
