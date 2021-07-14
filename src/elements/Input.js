import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { placeholder, value, type, _onChange } = props;
  return (
    <>
      <ElInput
        onChange={_onChange}
        placeholder={placeholder}
        value={value}
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
  padding: 12px 120px 12px 10px;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
`;

export default Input;
