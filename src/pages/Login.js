import React from "react";
import { Input, Button } from "../elements";

const Login = () => {
  return (
    <>
      <div>
        <h2>로그인</h2>
        <Input label="아이디"></Input>
        <Input label="비밀번호"></Input>
        <Button width="auto" text="로그인"></Button>
        <Button width="auto" text="회원가입"></Button>
      </div>
    </>
  );
};

export default Login;
