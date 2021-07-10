import React from "react";
import Input from "../elements/Input";
import Button from "../elements/Button";

const Register = (props) => {
  return (
    <>
      <div>
        <Input label="아이디" placeholder="아이디를 입력해주세요"></Input>
        <Input label="닉네임" placeholder="닉네임을 입력해주세요"></Input>
        <Input label="비밀번호" placeholder="비밀번호를 입력해주세요"></Input>
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요"
        ></Input>
        <Button width="auto" text="회원가입하기"></Button>
      </div>
    </>
  );
};

export default Register;
