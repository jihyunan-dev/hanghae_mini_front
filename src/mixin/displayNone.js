import  { css } from "styled-components";

export const onlyMobile = css`
  ${({ theme }) => theme.device.tablet} {
    display: none;
  }
`;

export const hiddenMobile = css`
  display: none;
  ${({ theme }) => theme.device.tablet} {
    display: initial;
  }
`;
