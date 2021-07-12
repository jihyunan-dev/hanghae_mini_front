import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import axios from "axios";
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
    loginId: "hwiyu25", // 유저가 가입할 때 사용한 아이디
    nickname: "jihyun",
    postList: [], // 내 게시물에 보여질 포스트
  },
  is_login: false,
};

// middleware actions
const loginDB = () => {
  return function (dispatch, getState, { history }) {};
};

const registerDB = (id, pwd, userId) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: {
        userId: id,
        password: pwd,
        passwordConfirm: pwd,
        nickname: userId,
      },
    })
      .then((res) => {
        window.alert(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

const logOutDB = () => {
  return function (dispatch, getState, { history }) {};
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
    [LOG_OUT]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// actionCreators

const actionCreators = {
  loginDB,
  registerDB,
  logOutDB,
};

export { actionCreators };
