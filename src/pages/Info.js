import React from "react";
import styled from "styled-components";
import logo from "../assets/mini_logo.svg";
import { container } from "../mixin/container";

const Info = (props) => {
  const { history } = props;
  return (
    <Container>
      <Logo src={logo} alt="오늘 점심 뭐 먹지?" />
      <Message> 본 서비스는 로그인 한 회원만 이용 가능합니다.</Message>
      <Btns>
        <Btn onClick={() => history.push("/login")}>로그인으로 이동</Btn>
        <Btn onClick={() => history.push("/register")}>회원가입으로 이동</Btn>
      </Btns>
    </Container>
  );
};

const Container = styled.div`
  ${container};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh - 70px;
  margin: 50px 0;

  ${({ theme }) => theme.device.tablet} {
    margin: 100px 0;
  }
`;

const Logo = styled.img`
  display: flex;
  width: 50%;
  min-width: 250px;
  max-width: 400px;
  margin: 30px 0;

  ${({ theme }) => theme.device.tablet} {
    margin: 50px 0;
  }
`;

const Message = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  margin-bottom: 30px;

  ${({ theme }) => theme.device.tablet} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const Btns = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`;

const Btn = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.mainBlue};
  width: 150px;
  height: 40px;
`;

export default Info;
