import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as ResultActions } from "../redux/modules/result";

import Comment from "./Comment";
import Detail from "./Detail";

const Result = (props) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) => state.result.currentMenu);
  const randomList = useSelector((state) => state.result.randomList) || [];

  const selectMenu = async (menuId) => {
    dispatch(ResultActions.getDetailDB(menuId));
  };

  return (
    <Container>
      <BtnBox>
        {randomList.map((result, idx) => {
          return (
            <MenuBtn key={idx} onClick={() => selectMenu(result.id)}>
              <p>{result.name}</p>
            </MenuBtn>
          );
        })}
      </BtnBox>
      {menu && <Detail menu={menu} />}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  margin: ${({ theme }) => theme.paddings.md} 0;
`;

const BtnBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
    gap: 15px;
  }
`;

const MenuBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  border: 2px solid ${({ theme }) => theme.colors.lightBlue};
  border-radius: 10px;
  /* background-color: ${({ theme }) => theme.colors.lightBlue}; */
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  cursor: pointer;
`;

export default Result;
