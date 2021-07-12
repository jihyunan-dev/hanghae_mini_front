import React from "react";
import { Button } from "../elements";

const CategoryBtns = (props) => {
  // 카테고리 정리 필요
  const category1 = ["채식", "육식 + 채식"];
  const category2 = ["식사", "요리"];
  const category3 = ["한식", "중식", "일식", "양식", "그 외"];
  return (
    <div>
      <div>
        {category1.map((item, idx) => (
          <Button key={idx} text={item} />
        ))}
      </div>
      <hr />
      <div>
        {category2.map((item, idx) => (
          <Button key={idx} text={item} />
        ))}
      </div>
      <hr />
      <div>
        {category3.map((item, idx) => (
          <Button key={idx} text={item} />
        ))}
      </div>
    </div>
  );
};

export default CategoryBtns;
