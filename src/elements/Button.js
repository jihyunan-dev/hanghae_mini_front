import React from "react";
import styled, { css } from "styled-components";
import { hiddenMobile } from "../mixin/displayNone";

const Button = (props) => {
  const { text, width, margin, padding, btnName, _onClick } = props;

  const styles = {
    width,
    margin,
    padding,
    btnName,
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
  _onClick: () => {},
};

const ElButton = styled.button`
  margin: ${(props) => props.margin};
  width: ${(props) => props.width};

  ${(props) => {
    const { btnName } = props;
    const { colors, fontSizes } = props.theme;
    if (btnName === "header") {
      return css`
        ${hiddenMobile}
        min-width: 120px;
        padding: 5px;
        background-color: transparent;
        font-size: ${fontSizes.md};
        font-weight: 600;
        transition: color 100ms ease-in-out;

        &:hover {
          color: ${colors.mainBlue};
        }
      `;
    } else {
      return css`
        color: black;
        border: none;
      `;
    }
  }}
`;

export default Button;
