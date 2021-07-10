import React from "react";
import { Input, Button } from "../elements";

const Register = (props) => {
  const [id, setId] = React.useState("");
  const [nickname, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signUp = () => {
    if (id === "" || pwd === "" || nickname === "") {
      return;
    }
    if (pwd !== pwd_check) {
      return;
    }
  };

  return (
    <>
      <div>
        <Input
          label="아이디"
          placeholder="아이디를 입력해주세요"
          _onChange={(e) => {
            setId(e.target.value);
          }}
        ></Input>
        <Input
          label="닉네임"
          placeholder="닉네임을 입력해주세요"
          _onChange={(e) => {
            setNickName(e.target.value);
          }}
        ></Input>
        <Input
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          _onChange={(e) => {
            setPwd(e.target.value);
          }}
        ></Input>
        <Input
          label="비밀번호 확인"
          placeholder="비밀번호를 확인해주세요"
          _onChange={(e) => {
            setPwdCheck(e.target.value);
          }}
        ></Input>
        <Button _onClick={signUp} width="auto" text="회원가입하기"></Button>
      </div>
    </>
  );
};

export default Register;
