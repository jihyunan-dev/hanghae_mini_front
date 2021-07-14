import React from "react";
import styled, { css } from "styled-components";
import { hiddenMobile } from "../mixin/displayNone";

const Button = (props) => {
  const { text, width, margin, padding, btnName, position, _onClick } = props;

  const styles = {
    width,
    margin,
    padding,
    position,
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
  btnName: "",
  position: false,
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
    } else if (btnName === "category") {
      return css`
        padding: 5px 0;
        margin: 5px;
        color: ${colors.black};
        border: 2px solid ${colors.mainBlue};
      `;
    } else if (btnName === "submit") {
      return css`
        position: ${(props) => (props.position ? "absolute" : false)};
        right: ${(props) => props.position && 0};
        top: ${(props) => props.position && 0};
        padding: 10px;
        border: 1px solid ${colors.mainBlue};
        color: ${colors.white};
        background-color: ${colors.mainBlue};
        font-size: ${fontSizes.sm};
        box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
          rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      `;
    } else if (btnName === "cancle") {
      return css`
        padding: 10px;
        border: 1px solid #eee;
        color: ${colors.black};
        background-color: #eee;
        font-size: ${fontSizes.sm};
        opacity: 80%;
      `;
    }
  }}
`;

export default Button;
