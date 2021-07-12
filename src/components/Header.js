import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";

const Header = (props) => {
  return (
    <>
      <Container>
        <Link to="/">
          <h1>오늘 점심 뭐먹냐?</h1>
        </Link>
        <Info>
          <Link to="/upload">메뉴 추천하기</Link>
          <Link to="/posts/:id">내 게시물</Link>
          <Button width="auto" text="로그아웃"></Button>
        </Info>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #eee;
  padding: 10px;
`;

const Info = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export default Header;
