import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { IoAdd, IoAppsSharp, IoLogOutOutline } from "react-icons/io5";
import { onlyMobile } from "../mixin/displayNone";

import Button from "../elements/Button";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userAction } from "../redux/modules/user";
import { deleteCookie, getCookie } from "../shared/Cookie";
import { history } from "../redux/configureStore";
import logo from "../assets/mini_logo.svg";
import { container } from "../mixin/container";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  console.log(is_login);

  return (
    <Container>
      <Content>
        <Link to="/">
          <h1>
            <Logo src={logo} alt="오늘 점심 뭐 먹냐?" />
          </h1>
        </Link>
        <Info>
          <IconBtn
            onClick={() => {
              history.push("/upload");
            }}
          >
            <IoAdd />
          </IconBtn>
          <Button
            _onClick={() => {
              history.push("/upload");
            }}
            btnName="header"
            text="메뉴 추천하기"
          />
          <IconBtn
            onClick={() => {
              history.push("/mypost");
            }}
          >
            <IoAppsSharp />
          </IconBtn>
          <Button
            _onClick={() => {
              history.push("/mypost");
            }}
            btnName="header"
            text="내 게시물"
          />
          <IconBtn
            onClick={() => {
              dispatch(userAction.logOutDB());
            }}
          >
            <IoLogOutOutline />
          </IconBtn>
          <Button
            _onClick={() => {
              dispatch(userAction.logOutDB());
            }}
            btnName="header"
            text="로그아웃"
          />
        </Info>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;

  ${({ theme }) => theme.device.tablet} {
    height: 70px;
  }
`;

const Content = styled.div`
  ${container}
  ${({ theme }) => {
    const { colors, device } = theme;
    return css`
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      ${device.desktop} {
        max-width: 1000px;
        margin: 0 auto;
      }
    `;
  }}
`;

const Info = styled.div`
  display: flex;
  height: 100%;
`;

const Logo = styled.img`
  height: 16px;

  ${({ theme }) => theme.device.tablet} {
    height: 20px;
  }
`;

const IconBtn = styled.button`
  ${onlyMobile}
  font-size: 20px;
  padding: ${({ theme }) => theme.paddings.sm};
`;

export default Header;
