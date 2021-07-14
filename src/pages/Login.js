import React from "react";
import styled from "styled-components";
import { Input, Button, Title } from "../elements";

import { history } from "../redux/configureStore";
import { useDispatch } from "react-redux";
import { actionCreators as loginAction } from "../redux/modules/user";

const Login = (props) => {
  const { history } = props;
  const dispatch = useDispatch();

  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePwd = (e) => {
    setPwd(e.target.value);
  };

  const login = () => {
    if (id === "" || pwd === "") {
      window.alert("아이디 혹은 비밀번호가 공란입니다! 입력해주세요!");
      return;
    }
    dispatch(loginAction.loginDB(id, pwd));
    history.replace("/");
  };
  return (
    <>
      <Container>
        <Title>로그인</Title>
        <InputBox>
          <Subtitle>아이디</Subtitle>
          <Input _onChange={onChangeId} />
        </InputBox>
        <InputBox>
          <Subtitle>비밀번호</Subtitle>
          <Input type="password" _onChange={onChangePwd} />
        </InputBox>
        <Btns>
          <Button btnName="submit" _onClick={login} text="로그인" />
          <Button
            btnName="cancle"
            text="회원가입으로 이동"
            _onClick={() => history.push("/register")}
          />
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
  min-width: 60px;
  margin-right: 10px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
`;

const Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin: 10px 0;
  width: 80%;
  max-width: 400px;
`;

export default Login;
