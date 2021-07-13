import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Image from "../elements/Image";

const ResultBtns = (props) => {
  const menuList = useSelector((state) => state.result.list) || [];
  console.log(menuList);

  return (
    <Container>
      {menuList.map((result, idx) => {
        console.log(result);
        return (
          <MenuBtn key={idx}>
            <Image imgUrl={result.img} />
            <p>{result.name}</p>
          </MenuBtn>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(150px, 1fr));
  width: 100%;
`;

const MenuBtn = styled.div``;

export default ResultBtns;
