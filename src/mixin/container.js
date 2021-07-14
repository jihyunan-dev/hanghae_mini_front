import { css } from "styled-components";

export const container = css`
  width: 100%;
  height: 100%;
  padding: 0 ${({ theme }) => theme.paddings.sm};

  ${({ theme }) => theme.device.tablet} {
    padding: 0 ${({ theme }) => theme.paddings.md};
  }

  ${({ theme }) => theme.device.desktop} {
    margin: 0 auto;
  }
`;
