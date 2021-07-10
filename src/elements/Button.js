import React from "react";
import styled from "styled-components";

const Button = (props) => {
  const { text, width, margin, padding, _onClick } = props;

  const styles = {
    width: width,
    margin: margin,
    padding: padding,
  };
  return (
    <>
      <ElButton {...styles} onClick={_onClick}>
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
  onClick: null,
};

const ElButton = styled.button`
  width: ${(props) => props.width};
  background-color: #eee;
  color: black;
  border: none;
`;

export default Button;
