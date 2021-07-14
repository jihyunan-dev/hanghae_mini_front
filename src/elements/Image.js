import React from "react";
import styled from "styled-components";

const Image = (props) => {
  const { imgUrl, minWidth } = props;
  return (
    <Outer minWidth={minWidth}>
      <Inner url={imgUrl} />
    </Outer>
  );
};

Image.defaultProps = {
  minWidth: "250px",
  imgUrl: "",
};

const Outer = styled.div`
  width: 100%;
  min-width: ${(props) => props.minWidth};
`;

const Inner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.url}");
  background-size: cover;
  background-position: center center;
`;

export default Image;
