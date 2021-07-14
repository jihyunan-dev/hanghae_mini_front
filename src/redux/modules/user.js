import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { api, api_token } from "../../shared/api";

// action type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_MYLIST = "GET_MYLIST";
const EDIT_MENU = "EDIT_MENU";
const DELETE_MENU = "DELETE_MENU";

// action creat function
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getMyList = createAction(GET_MYLIST, (postList) => ({ postList }));
// 내 게시글 page
const editMenu = createAction(EDIT_MENU, (menuId) => ({ menuId }));
const deleteMenu = createAction(DELETE_MENU, (menuId) => ({ menuId }));

// initialState
const initialState = {
  user: {
    userId: 1, // 서버에서 받아온 ID(DB에서 사용)
    loginId: "", // 유저가 가입할 때 사용한 아이디
    nickname: "",
    // postList: [], // 내 게시물에 보여질 포스트
  },
  postList: [],
  is_login: false,
};

// middleware actions
const loginDB =
  (id, pwd) =>
  async (dispatch, getState, { history }) => {
    await api
      .post(`/user/login`, {
        userId: id,
        password: pwd,
      })
      .then((user) => {
        console.log(user);
        dispatch(
          setUser({
            nickname: user.data.result.user.nickname,
            userId: user.data.result.user.userId,
          })
        );
        const accessToken = "Bearer " + user.data.token;
        console.log(accessToken);

        setCookie("is_login", `${accessToken}`);
        history.replace("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

// const getUserDB =
const registerDB =
  (setId, setPwd, setNickName, setPwdCheck) =>
  async (dispatch, getState, { history }) => {
    await api
      .post(`/user/register`, {
        userId: setId,
        password: setPwd,
        passwordConfirm: setPwdCheck,
        nickname: setNickName,
      })
      .then((res) => {
        window.alert("환영합니다");
      })
      .catch((err) => {
        console.log(err);
      });
  };

const loginCheckDB =
  () =>
  async (dispatch, getState, { history }) => {
    const token = getCookie("is_login");
    console.log(token);
    await api_token
      .get(`/`)
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            token: token,
            id: res.data.user.id,
            userId: res.data.user.userId,
            nickname: res.data.user.nickname,
          })
        );
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };

const getUserListDB =
  () =>
  (dispatch, getState, { history }) => {
    api.get(`/user/entries`).then((res) => {
      console.log(res);
      dispatch(getMyList(res.data.entries));
      console.log(getMyList(res.data.entries));
    });
  };

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/login");
  };
};

const deleteMenuDB =
  (id) =>
  (dispatch, getState, { history }) => {
    api
      .delete(`/menu/${id}`)
      .then((res) => dispatch(deleteMenu(id)))
      .catch((err) => console.log("게시글 삭제 실패!", err));
  };

const editMenuDB =
  (menuId) =>
  (dispatch, getState, { history }) => {
    const menuId = getState().user.postList;
    console.log(menuId);
  };

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_MYLIST]: (state, action) =>
      produce(state, (draft) => {
        draft.user.postList = action.payload.postList;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
    [EDIT_MENU]: (state, action) => produce(state, (draft) => {}),

    [DELETE_MENU]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload);
        const menuId = action.payload;
        console.log(menuId);
      }),
  },
  initialState
);

// actionCreators

const actionCreators = {
  loginDB,
  registerDB,
  logOutDB,
  loginCheckDB,
  editMenu,
  editMenuDB,
  deleteMenu,
  deleteMenuDB,
  getUserListDB,
};

export { actionCreators };
