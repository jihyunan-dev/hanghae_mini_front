import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, width, margin, padding } = props;

  const stlyes = {
    width: width,
    margin: margin,
    padding: padding,
  };
  return (
    <>
      <ElButton>{text}</ElButton>
    </>
  );
};

Button.defaultProps = {
  width: "100%",
  text: false,
  margin: false,
  padding: false,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #eee;
  color: #fff;
  border: none;
`;

export default Button;
