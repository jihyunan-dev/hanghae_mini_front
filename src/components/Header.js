import React from "react";
import Button from "../elements/Button";

const Header = (props) => {
  return (
    <>
      <div>오늘 점심 뭐먹냐?</div>
      <Button width="auto" text="내정보"></Button>
      <Button width="auto" text="로그아웃"></Button>
    </>
  );
};

export default Header;
