import React from "react";
import styled from "styled-components";

const Input = (props) => {
  const { label, placeholder, type, _onChange } = props;
  return (
    <>
      <div>
        {label}
        <ElInput
          onChange={_onChange}
          placeholder={placeholder}
          type={type}
        ></ElInput>
      </div>
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
`;

export default Input;
