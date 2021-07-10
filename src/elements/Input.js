import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <>
      <ElInput></ElInput>
    </>
  );
};

Input.defaultProps = {};

const ElInput = styled.input`
  width: 100%;
  padding: 12px 4px;
`;

export default Input;
