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
      .then((res) => dispatch(setComment(res.data.result)))
      .catch((err) => console.log(err));
  };

const addCommentDB =
  (comment) =>
  (dispatch, getState, { history }) => {
    const { nickname, id: userId } = getState().user.user;
    const body = { ...comment, nickname, userId };
    api.post("/comments/comments", body).then((res) => {
      const id = res.result.id;
      dispatch(addComment({ ...body, commentId: id }));
    });

    // dispatch(addComment({ ...body, commentId: id }));
  };

const editCommentDB =
  (menuId, commentId, newComment) =>
  (dispatch, getState, { history }) => {
    const { id: userId } = getState().user.user;
    const obj = { description: newComment, userId };
    api
      .put(`comments/comments/${commentId}`, obj) // json-server-에서는 patch로 작동. api 요청은 put이므로 put으로 전달
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
  list: {},
};

// reducer
export default handleActions(
  {
    [SET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.comments);
        action.payload.comments.map((item) => {
          const menuId = item.id;
          console.log(`menuId: ${menuId}`);
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
        const { menuId, commentId, newComment } = action.payload;
        draft.list[menuId] = draft.list[menuId].map((comment) =>
          comment.id === commentId
            ? { ...comment, comment: newComment }
            : comment
        );
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
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
