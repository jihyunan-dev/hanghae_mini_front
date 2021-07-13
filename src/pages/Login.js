import React from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as loginAction } from "../redux/modules/user";

const Login = () => {
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const onChangeId = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    console.log(e.target.value);
    setPwd(e.target.value);
  };

  const login = () => {
    console.log(id);

    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    dispatch(loginAction.loginDB(id, pwd));
  };
  return (
    <>
      <Container>
        <h2>로그인</h2>
<<<<<<< HEAD
        <Input _onChange={onChangeId} label="아이디"></Input>
        <Input _onChange={onChangePwd} label="비밀번호"></Input>
        <Button _onClick={login} width="auto" text="로그인"></Button>
        <Button width="auto" text="회원가입"></Button>
      </div>
=======
        <Input label="아이디"></Input>
        <Input label="비밀번호"></Input>
        <BTN>
          <Button width="auto" text="로그인"></Button>
          <Button width="auto" text="회원가입"></Button>
        </BTN>
      </Container>
>>>>>>> 6c93afe595acbb4dcdb98dd3973bb7b4bd89af84
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
`;

const BTN = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Login;
