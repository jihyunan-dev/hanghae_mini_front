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
const editComment = createAction(EDIT_COMMENT, (comment, menuId) => ({
  comment,
  menuId,
}));
const deleteComment = createAction(DELETE_COMMENT, (menuId, commentId) => ({
  menuId,
  commentId,
}));

// thunk
const getCommentDB =
  (menuId) =>
  async (dispatch, getState, { history }) => {
    const { data } = await api.get(`/comments?menuId=${menuId}`);
    dispatch(setComment(data));
  };

const addCommentDB =
  (comment) =>
  async (dispatch, getState, { history }) => {
    const { nickname, userId } = getState().user.user;
    const body = { ...comment, nickname, userId };
    const { data: result } = await api.post("/comments", body);

    dispatch(addComment({ ...body, commentId: result.id }));
  };

const editCommentDB =
  (commentId, comment) =>
  (dispatch, getState, { history }) => {};

const deleteCommentDB =
  (menuId, commentId) =>
  (dispatch, getState, { history }) => {
    api
      .delete(`/comments/${commentId}`)
      .then((res) => dispatch(deleteComment(menuId, commentId)));
  };

// initialState
const initialState = {
  list: {},
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        action.payload.comments.forEach((item) => {
          const menuId = item.menuId;
          draft.list[menuId]
            ? draft.list[menuId].push(item)
            : (draft.list[menuId] = [item]);
        });
      }),
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const { menuId } = action.payload.comment;
        draft.list[menuId]
          ? draft.list[menuId].push(action.payload.comment)
          : (draft.list[menuId] = [action.payload.comment]);
      }),
    [EDIT_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const {
          menuId,
          comment: { id: commentId },
        } = action.payload;
        draft.list[menuId].map((comment) =>
          comment.id === commentId ? action.payload.comment : comment
        );
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        const { menuId, commentId } = action.payload;
        draft.list[menuId] = draft.list[menuId].filter(
          (comment) => comment.id !== commentId
        );
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
