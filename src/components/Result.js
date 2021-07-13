import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import Comment from "./Comment";
import { api } from "../shared/api";
import Detail from "./Detail";

const Result = (props) => {
  const [menu, setMenu] = useState(null);
  const randomList = useSelector((state) => state.result.randomList) || [];

  const selectMenu = async (menuId) => {
    const { data } = await api.get(`menu/${menuId}`);
    setMenu(data);
  };

  useEffect(() => {
    return () => setMenu(null);
  }, []);

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
