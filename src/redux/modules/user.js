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
  user: null,
  is_login: false,
};

// middleware actions
const loginDB = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://localhost:3001/login",
      data: {
        id: id,
        pwd: pwd,
      },
    }).then((res) => {
      console.log(res);
      dispatch(
        setUser({
          id: res.data.id,
          nickname: res.data.nickname,
        })
      );
    });
  };
};

const registerDB = (id, pwd, nickname) => {
  return function (dispatch, getState, { history }) {
    axios({
      method: "post",
      url: "http://localhost:3001/register",
      data: {
        userId: id,
        password: pwd,
        passwordConfirm: pwd,
        nickname: nickname,
      },
    })
      .then((res) => {
        window.alert(`${res.data.userId}님 환영합니다`);
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
