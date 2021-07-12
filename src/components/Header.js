import React from "react";
import styled from "styled-components";
import Button from "../elements/Button";

const Header = (props) => {
  return (
    <>
      <Container>
        <div>오늘 점심 뭐먹냐?</div>
        <div>
          <Button width="auto" text="내정보"></Button>
          <Button width="auto" text="로그아웃"></Button>
        </div>
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
`;

export default Header;
