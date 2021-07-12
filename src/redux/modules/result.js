import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//action type
const GET_MENU = "GET_MENU";
const GET_MENU_DETAIL = "GET_MENU_DETAIL";
const ADD_MENU = "ADD_MENU";
const EDIT_MENU = "EDIT_MENU";
const DELETE_MENU = "DELETE_MENU";
const GET_RANK = "GET_RANK";
const UPDATE_RANK = "UPDATE_RANK";

// action create function
// main page
const getMenu = createAction(GET_MENU, (menu_list) => ({
  menu_list,
}));

// main page
const getMenuDetail = createAction(GET_MENU_DETAIL, () => ({}));

// upload page
const addMenu = createAction(ADD_MENU, (postId, commentList) => ({
  postId,
  commentList,
}));

// main page
const getRank = createAction(GET_RANK, (menu_like) => ({ menu_like }));

// main page
const updateRank = createAction(UPDATE_RANK, () => ({}));

// 내 게시글 page
const editMenu = createAction(EDIT_MENU, () => ({}));
const deleteMenu = createAction(DELETE_MENU, () => ({}));

// initialState

const initialState = {
  list: [],
  rank_list: [],
};

// thunk
const getMenuDB =
  (menu_list) =>
  async (dispatch, getState, { history }) => {
    const menu_list = await api.get("/menu");
    console.log(menu_list.data);
    dispatch(getMenu(menu_list.data));
  };

const getMenuDetailDB =
  (id) =>
  async (dispatch, getState, { history }) => {
    const menu_detail = await api.get(`/menu/${id}`);
    console.log(menu_detail);
    dispatch(getMenuDetail());
  };

const addMenuDB =
  (formData) =>
  async (dispatch, getState, { history }) => {
    const response = await api.post("/menu", {
      data: formData,
      header: { "Content-Type": "multipart/form-data" },
    });
  };

const deleteMenuDB = () => {
  return function (dispatch, getState, { history }) {};
};

// const getRankDB = (name, img) => {
//   return function (dispatch, getState, { history }) {
//     api.get(`/menu?name=`).then((res) => {
//       console.log(res.data);
//       const menu_like = res.data.result;
//       dispatch(getRank(menu_like));
//     });
//   };
// };

const updateRankDB = () => {
  return function (dispatch, getState, { history }) {};
};

//reducer
export default handleActions(
  {
    [GET_MENU]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(...action.payload.menu_list);
      }),
    [EDIT_MENU]: (state, action) => produce(state, (draft) => {}),
    [DELETE_MENU]: (state, action) => produce(state, (draft) => {}),
    [GET_RANK]: (state, action) =>
      produce(state, (draft) => {
        draft.rank_list.push(action.payload.menu_like);
      }),
    [UPDATE_RANK]: (state, action) => produce(state, (draft) => {}),
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
  // editMenuDB,
  deleteMenuDB,
  getMenuDB,
  getMenuDetailDB,
  updateRankDB,
  //   getRankDB,
};

export { actionCreators };
