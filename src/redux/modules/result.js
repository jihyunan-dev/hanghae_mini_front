import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { api } from "../../shared/api";

//action type
const GET_MENU = "GET_MENU";
const GET_DETAIL = "GET_DETAIL";
const ADD_MENU = "ADD_MENU";
const GET_RANK = "GET_RANK";
const UPDATE_RANK = "UPDATE_RANK";

// action create function
const getMenu = createAction(GET_MENU, (randomList) => ({ randomList }));
const getDetail = createAction(GET_DETAIL, (menu) => ({ menu }));
const addMenu = createAction(ADD_MENU, (newMenu) => ({ newMenu }));
const getRank = createAction(GET_RANK, (menu_like) => ({ menu_like }));
const updateRank = createAction(UPDATE_RANK, () => ({}));

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
    const { data: menuList } = await api.get("/menu", option);
    dispatch(getMenu(menuList));
  };

const getDetailDB =
  (menuId) =>
  (dispatch, getState, { history }) => {
    api.get(`menu/${menuId}`).then((res) => dispatch(getDetail(res.data)));
  };

const addMenuDB =
  (dataObj) =>
  async (dispatch, getState, { history }) => {
    const { userId } = getState().user.user;
    const newObj = { id: userId, ...dataObj };

    const formData = new FormData();
    for (let entry of Object.entries(newObj)) {
      formData.append(entry[0], entry[1]);
    }

    try {
      // 서버가 있을 때는 주석 풀기
      // const {
      //   data: {
      //     result: { id: menuId, img, description },
      //   },
      // } = await api.post("/menu", formData, {
      //   headers: { "Content-Type": "multipart/form-data" },
      // });
      // const stateObj = { ...newObj, img, menuId, description };

      // 가짜 데이터🙋🏻‍♀️
      const stateObj = {
        menuId: 5,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8TgzcEGvR9rAOG8unUUaLnKWwyzRgIl5ew&usqp=CAU",
        description: "하하하",
        name: "비빔밥",
        userId,
      };

      dispatch(addMenu(stateObj));
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
};

export { actionCreators };
