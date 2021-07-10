import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, type } = props;
  return (
    <>
      <div>
        {label}
        <ElInput placeholder={placeholder} type={type}></ElInput>
      </div>
    </>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "텍스트를 입력해주세요",
  type: "text",
};

const ElInput = styled.input`
  width: 100%;
  padding: 12px 4px;
`;

export default Input;
