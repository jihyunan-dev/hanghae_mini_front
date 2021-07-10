import React from "react";
import { Input, Button } from "../elements";

import { useDispatch } from "react-redux";
import { actionCreators as resiterAction } from "../redux/modules/user";

const Register = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [nickname, setNickName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_check, setPwdCheck] = React.useState("");

  const signUp = () => {
    if (id === "" || pwd === "" || nickname === "") {
      window.alert("아이디, 패스워드, 닉네임을 모두 입력해주세요!");
      return;
    }
    if (pwd !== pwd_check) {
      window.alert("패스워드와 패스워드 확인이 일치하지 않습니다!");
      return;
    }
    dispatch(resiterAction.registerDB);
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
        <Button width="auto" text="로그인"></Button>
      </div>
    </>
  );
};

export default Register;
