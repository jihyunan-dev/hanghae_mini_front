import React from "react";
import styled from "styled-components";

const Title = (props) => {
  const { children } = props;
  return <TitleContainer>{children}</TitleContainer>;
};

Title.defaultProps = {
  content: "",
  center: false,
};

const TitleContainer = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: ${({ theme }) => theme.paddings.md};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;
`;

export default Title;
