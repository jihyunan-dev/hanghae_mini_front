import React, { useEffect, useState } from "react";
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
      {randomList.map((result, idx) => {
        return (
          <MenuBtn key={idx} onClick={() => selectMenu(result.id)}>
            <p>{result.name}</p>
          </MenuBtn>
        );
      })}
      {menu && <Detail menu={menu} />}
      <Comment />
    </Container>
  );
};

const Container = styled.div``;

const MenuBtn = styled.div`
  cursor: pointer;
`;

export default Result;
