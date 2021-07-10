import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, width, margin, padding, _onClick } = props;

  const stlyes = {
    width: width,
    margin: margin,
    padding: padding,
  };
  return (
    <>
      <ElButton {...stlyes} onClick={_onClick}>
        {text}
      </ElButton>
    </>
  );
};

Button.defaultProps = {
  width: "100%",
  text: false,
  margin: false,
  padding: false,
  _onClick: () => {},
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #eee;
  color: black;
  border: none;
`;

export default Button;
