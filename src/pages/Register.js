import React, { useState } from "react";
import styled from "styled-components";
import { Input, Button, Title } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as registerAction } from "../redux/modules/user";

const Register = (props) => {
  const { history } = props;
  const dispatch = useDispatch();
  const [id, setId] = useState("");
  const [nickname, setNickName] = useState("");
  const [password, setPwd] = useState("");
  const [passwordConfirm, setPwdCheck] = useState("");

  const signUp = () => {
    if (id === nickname) {
      window.alert("아이디와 닉네임이 중복되지않게 입력해주세요!");
      return;
    }

    if (id === "" || password === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (password !== passwordConfirm) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(
      registerAction.registerDB(id, password, nickname, passwordConfirm)
    );
  };

  return (
    <>
      <Container>
        <Title>회원가입</Title>
        <InputBox>
          <Subtitle>아이디</Subtitle>
          <Input
            _onChange={(e) => {
              setId(e.target.value);
            }}
          />
        </InputBox>
        <InputBox>
          <Subtitle>닉네임</Subtitle>

          <Input
            label="닉네임"
            _onChange={(e) => {
              setNickName(e.target.value);
            }}
          />
        </InputBox>
        <InputBox>
          <Subtitle>비밀번호</Subtitle>

          <Input
            type="password"
            _onChange={(e) => {
              setPwd(e.target.value);
            }}
          />
        </InputBox>
        <InputBox>
          <Subtitle>비밀번호 확인</Subtitle>
          <Input
            type="password"
            _onChange={(e) => {
              setPwdCheck(e.target.value);
            }}
          />
        </InputBox>
        <Btns>
          <Button btnName="submit" _onClick={signUp} text="회원가입"></Button>
          <Button
            btnName="cancle"
            text="로그인으로 이동"
            _onClick={() => history.push("/login")}
          ></Button>
        </Btns>
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

const InputBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin-bottom: ${({ theme }) => theme.paddings.sm};
`;

const Subtitle = styled.p`
  flex-shrink: 0;
  min-width: 100px;
  margin-right: 10px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  width: 100%;
  max-width: 400px;
`;

export default Register;
