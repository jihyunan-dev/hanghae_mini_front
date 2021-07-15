import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button } from "../elements";

const CategoryBtns = (props) => {
  const { setCategory, initial } = props;

  // 카테고리 정리 필요
  const btns1 = ["채식", "육식+채식"];
  const btns2 = ["식사", "요리"];
  const btns3 = ["한식", "중식", "일식", "양식", "그 외"];

  const [category1, setCategory1] = useState(initial.first);
  const [category2, setCategory2] = useState(initial.second);
  const [category3, setCategory3] = useState(initial.third);

  useEffect(
    () => setCategory({ category1, category2, category3 }),
    [category1, category2, category3]
  );

  return (
    <Container>
      <Categorys>
        {btns1.map((item, idx) => (
          <Button
            type="button"
            btnName="category"
            key={idx}
            text={item}
            selected={category1 === item}
            _onClick={() => setCategory1(item)}
          />
        ))}
      </Categorys>
      <Categorys>
        {btns2.map((item, idx) => (
          <Button
            type="button"
            btnName="category"
            key={idx}
            text={item}
            selected={category2 === item}
            _onClick={() => setCategory2(item)}
          />
        ))}
      </Categorys>
      <Categorys>
        {btns3.map((item, idx) => (
          <Button
            type="button"
            btnName="category"
            key={idx}
            text={item}
            selected={category3 === item}
            _onClick={() => setCategory3(item)}
          />
        ))}
      </Categorys>
    </Container>
  );
};

CategoryBtns.defaultProps = {
  initial: {
    first: "채식",
    second: "식사",
    third: "한식",
  },
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: ${({ theme }) => theme.paddings.sm};
`;

const Categorys = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export default CategoryBtns;
