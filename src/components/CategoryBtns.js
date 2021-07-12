import React from "react";
import { useState } from "react";
import { Button } from "../elements";

const CategoryBtns = (props) => {
  const [categoryOne, setCategoryOne] = useState();
  const [categoryTwo, setCategoryTwo] = useState();
  const [categoryThree, setCategoryThree] = useState();
  console.log(setCategoryOne);
  // 카테고리 정리 필요
  const category1 = ["채식", "채식+육식"];
  const category2 = ["식사", "요리"];
  const category3 = ["한식", "중식", "일식", "양식", "그 외"];

  return (
    <div>
      <div>
        {category1.map((item, idx) => (
          <Button
            value={categoryOne}
            _onClick={setCategoryOne}
            key={idx}
            text={item}
          />
        ))}
      </div>
      <hr />
      <div>
        {category2.map((item, idx) => (
          <Button
            value={categoryTwo}
            _onClick={setCategoryTwo}
            key={idx}
            text={item}
          />
        ))}
      </div>
      <hr />
      <div>
        {category3.map((item, idx) => (
          <Button
            value={categoryThree}
            _onClick={setCategoryThree}
            key={idx}
            text={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryBtns;
