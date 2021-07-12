import React from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as loginAction } from "../redux/modules/user";

const Login = () => {
  return (
    <>
      <Container>
        <h2>로그인</h2>
        <Input label="아이디"></Input>
        <Input label="비밀번호"></Input>
        <BTN>
          <Button width="auto" text="로그인"></Button>
          <Button width="auto" text="회원가입"></Button>
        </BTN>
      </Container>
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
