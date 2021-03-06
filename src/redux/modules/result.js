import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//action type
const GET_MENU = "GET_MENU";
const GET_DETAIL = "GET_DETAIL";
const ADD_MENU = "ADD_MENU";
const GET_RANK = "GET_RANK";
const UPDATE_RANK = "UPDATE_RANK";
const RESET_CURRENT_MENU = "RESET_CURRENT_MENU";

// action create function
const getMenu = createAction(GET_MENU, (randomList) => ({ randomList }));
const getDetail = createAction(GET_DETAIL, (menu) => ({ menu }));
const addMenu = createAction(ADD_MENU, (newMenu) => ({ newMenu }));
const getRank = createAction(GET_RANK, (menu_like) => ({ menu_like }));
const updateRank = createAction(UPDATE_RANK, () => ({}));
const resetCurrentMenu = createAction(RESET_CURRENT_MENU);

// initialState

const initialState = {
  randomList: [],
  rankList: [],
  currentMenu: null,
};

// thunk
const getMenuDB =
  (category) =>
  async (dispatch, getState, { history }) => {
    const option = {
      params: {
        ...category, // 카테고리 한글 인코딩/디코딩 혹은 다른 규칙 필요
      },
    };
    const {
      data: { menuList },
    } = await api.get("/menu", option);
    dispatch(getMenu(menuList));
  };

const getDetailDB =
  (menuId) =>
  (dispatch, getState, { history }) => {
    console.log(menuId);
    api.get(`menu/${menuId}`).then((res) => {
      const {
        data: { result },
      } = res;
      dispatch(getDetail(result));
    });
  };

const addMenuDB =
  (dataObj) =>
  async (dispatch, getState, { history }) => {
    const { id } = getState().user.user;
    const newObj = { id: id, ...dataObj };

    const formData = new FormData();
    for (let entry of Object.entries(newObj)) {
      formData.append(entry[0], entry[1]);
    }

    try {
      const {
        data: {
          result: { id: menuId, img, description },
        },
      } = await api.post("/menu", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const stateObj = { ...newObj, img, menuId, description };
      dispatch(addMenu(stateObj));
      history.push("/mypost");
    } catch (err) {
      console.log("메뉴 등록 실패", err);
    }
  };

const getRankDB =
  () =>
  (dispatch, getState, { history }) => {
    api.get("/menu/like").then((res) => {
      dispatch(getRank(res.data.result));
    });
  };

const likeMenuDB =
  (menuId) =>
  (dispatch, getState, { history }) => {
    api
      .patch(`/menu/${menuId}/like`, { id: menuId })
      .catch((err) => console.log("좋아요 실패", err));
  };

//reducer
export default handleActions(
  {
    [GET_MENU]: (state, action) =>
      produce(state, (draft) => {
        draft.randomList = action.payload.randomList;
      }),
    [GET_DETAIL]: (state, action) =>
      produce(state, (draft) => {
        draft.currentMenu = action.payload.menu;
      }),
    [ADD_MENU]: (state, action) =>
      produce(state, (draft) => {
        draft.randomList.push(action.payload.newMenu);
      }),
    [GET_RANK]: (state, action) =>
      produce(state, (draft) => {
        draft.rankList = action.payload.menu_like;
      }),
    [UPDATE_RANK]: (state, action) => produce(state, (draft) => {}),
    [RESET_CURRENT_MENU]: (state, action) =>
      produce(state, (draft) => {
        draft.randomList = [];
        draft.currentMenu = null;
      }),
  },
  initialState
);

const actionCreators = {
  getMenu,
  addMenu,
  updateRank,
  getRank,
  getRankDB,
  getMenuDB,
  getDetailDB,
  addMenuDB,
  likeMenuDB,
  resetCurrentMenu,
};

export { actionCreators };
