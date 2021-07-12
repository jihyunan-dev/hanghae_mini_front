import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, type, _onChange } = props;
  return (
    <>
      <ElInput
        onChange={_onChange}
        placeholder={placeholder}
        type={type}
      ></ElInput>
    </>
  );
};

Input.defaultProps = {
  label: false,
  placeholder: "",
  type: "text",
  _onChange: () => {},
};

const ElInput = styled.input`
  width: 100%;
  padding: 12px 4px;
  border: 1px solid #eee;
`;

export default Input;
