import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

// action type
const SET_USER = "SET_USER";

// action creat function
const setUser = createAction(SET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: {
    userId: "", // 서버에서 받아온 ID(DB에서 사용)
    loginId: "", // 유저가 가입할 때 사용한 아이디
    nickname: "",
    postList: [], // 내 게시물에 보여질 포스트
  },
  is_login: false,
};

const registerDB = (id, pwd, userId) => {
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
  },
  initialState
);

// actionCreators

const actionCreators = {
  registerDB,
};

export { actionCreators };
