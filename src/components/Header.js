import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { deleteCookie, getCookie } from "../shared/Cookie";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);

  if (is_login) {
    return (
      <>
        <Container>
          <Link to="/">
            <h1>오늘 점심 뭐먹냐?</h1>
          </Link>
          <Info>
            <Link to="/upload">메뉴 추천하기</Link>
            <Link to="/posts/:id">내 게시물</Link>
            <Button
              _onClick={() => {
                dispatch(userAction.logOutDB());
              }}
              width="auto"
              text="로그아웃"
            ></Button>
          </Info>
        </Container>
      </>
    );
  }
  return (
    <>
      <Container>
        <Link to="/">
          <h1>오늘 점심 뭐먹냐?</h1>
        </Link>
        <Info>
          <Link to="/register">회원가입</Link>
          <Link to="/login">로그인</Link>
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
