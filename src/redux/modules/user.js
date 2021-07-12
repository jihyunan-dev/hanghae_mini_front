import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { getCookie, setCookie, deleteCookie } from "../../shared/Cookie";
import { api } from "../../shared/api";

// action type
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";

// action creat function
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: {
    userId: 3, // 서버에서 받아온 ID(DB에서 사용)
    loginId: "", // 유저가 가입할 때 사용한 아이디
    nickname: "",
    postList: [], // 내 게시물에 보여질 포스트
  },
  is_login: false,
};

// middleware actions
const loginDB =
  (id, pwd) =>
  async (dispatch, getState, { history }) => {
    const login_user = await api
      .post(`/login`, {
        id: id,
        pwd: pwd,
      })
      .then((res) => {
        console.log(res);
        dispatch(
          setUser({
            token: "",
            id: res.data.id,
            userId: res.data.userId,
            nickname: res.data.nickname,
            postList: [
              {
                menuId: "",
                name: "",
                description: "",
                img: "",
                like: "",
              },
            ],
          })
        );
        const accessToken = res.data.token;

        setCookie("is_login", `${accessToken}`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

const registerDB =
  (id, pwd, nickname) =>
  async (dispatch, getState, { history }) => {
    const regist_user = await api
      .post(`/register`, {
        userId: id,
        pwd: pwd,
        pwdConfirm: pwd,
        nickname: nickname,
      })
      .then((res) => {
        window.alert(`${res.data.userId}님 환영합니다`);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// loginCheck api 필요함
// 어떤걸 받아와야하는지 알아야함

const loginCheckDB =
  () =>
  async (dispatch, getState, { history }) => {
    const token = getCookie("is_login");
    console.log(token);
    const check_user = await api
      .post(`/check`, {
        headers: {
          authorization: "Bearer ${token}",
        },
      })
      .then((res) => {
        console.log(res.data);
        dispatch(
          setUser({
            token: "",
            id: res.data.id,
            userId: res.data.userId,
            nickname: res.data.nickname,
            postList: [
              {
                menuId: "",
                name: "",
                description: "",
                img: "",
                like: "",
              },
            ],
          })
        );
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };

const logOutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
  };
};

// reducer
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
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
};

export { actionCreators };
