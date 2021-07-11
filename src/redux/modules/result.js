import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";

//action type
const GET_MENU = "GET_MENU";
const UPDATE_RANK = "UPDATE_RANK";
const GET_RANK = "GET_RANK";
const GET_MENU_DETAIL = "GET_MENU_DETAIL";
const ADD_MENU = "ADD_MENU";
const EDIT_MENU = "EDIT_MENU";
const DELETE_MENU = "DELETE_MENU";

// action create function
// main page
const getMenu = createAction(GET_MENU, (menu_list) => ({
  menu_list,
}));
// main page
const updateRank = createAction(UPDATE_RANK, () => ({}));
// main page
const getRank = createAction(GET_RANK, () => ({}));
// main page
const getMenuDetail = createAction(GET_MENU_DETAIL, () => ({}));
// upload page
const addMenu = createAction(ADD_MENU, (post_id, comment_list) => ({
  post_id,
  comment_list,
}));

// 내 게시글 page
const editMenu = createAction(EDIT_MENU, () => ({}));
const deleteMenu = createAction(DELETE_MENU, () => ({}));

// initialState

const initialState = {
  list: [],
};

// middleware
const addMenuDB = (post_id, contents) => {
  return function (dispatch, getState, { history }) {};
};

const editMenuDB = () => {
  return function (dispatch, getState, { history }) {};
};

const deleteMenuDB = () => {
  return function (dispatch, getState, { history }) {};
};

const getRankDB = () => {
  return function (dispatch, getState, { history }) {};
};

const updateRankDB = () => {
  return function (dispatch, getState, { history }) {};
};

const getMenuDB = (name, img) => {
  return function (dispatch, getState, { history }) {
    axios
      .get("http://localhost:3001/MENU_SUCCESS")
      .then((res) => {
        console.log(res.data);
        // const menu_list = res.data.result[1];
        // dispatch(getMenu(menu_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const getMenuDetailDB = (post_id) => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [GET_MENU]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.menu_list);
      }),
    [GET_MENU_DETAIL]: (state, action) => produce(state, (draft) => {}),
    [EDIT_MENU]: (state, action) => produce(state, (draft) => {}),
    [DELETE_MENU]: (state, action) => produce(state, (draft) => {}),
    [UPDATE_RANK]: (state, action) => produce(state, (draft) => {}),
    [GET_RANK]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

const actionCreators = {
  getMenu,
  getMenuDetail,
  addMenu,
  editMenu,
  deleteMenu,
  updateRank,
  getRank,
  addMenuDB,
  editMenuDB,
  deleteMenuDB,
  getMenuDB,
  getMenuDetailDB,
  updateRankDB,
  getRankDB,
};

export { actionCreators };
