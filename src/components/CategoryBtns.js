import React, { useEffect, useState } from "react";
import { Button } from "../elements";

const CategoryBtns = (props) => {
  const { setCategory } = props;

  // 카테고리 정리 필요
  const btns1 = ["채식", "육식+채식"];
  const btns2 = ["식사", "요리"];
  const btns3 = ["한식", "중식", "일식", "양식", "그 외"];

  const [category1, setCategory1] = useState(null);
  const [category2, setCategory2] = useState(null);
  const [category3, setCategory3] = useState(null);

  // useEffect(
  //   () => setCategory({ category1, category2, category3 }),
  //   [category1, category2, category3]
  // );

  return (
    <div>
      <div>
        {btns1.map((item, idx) => (
          <Button key={idx} text={item} _onClick={() => setCategory1(item)} />
        ))}
      </div>
      <div>
        {btns2.map((item, idx) => (
          <Button key={idx} text={item} _onClick={() => setCategory2(item)} />
        ))}
      </div>
      <div>
        {btns3.map((item, idx) => (
          <Button key={idx} text={item} _onClick={() => setCategory3(item)} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBtns;
