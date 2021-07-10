import React from "react";
import Button from "../elements/Button";

const Main = () => {
  // 카테고리 정리 필요
  const category1 = ["채식", "육식 + 채식"];
  const category2 = ["한식", "중식", "양식", "일식"];
  const category3 = ["혼밥", "친구", "연인", "가족", "모임"];
  const count = ["1가지", "2가지", "3가지"];

  return (
    <div>
      <p>{"__받아올 유저 닉네임__"}님의 오늘 점심 추천</p>
      <hr />
      <div>
        {/* hr은 스타일 적용 전 카테고리 구분을 해놓으려고 작성했습니다. 이후 삭제해주시면 됩니다. */}
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
      <hr />
      <div>
        {count.map((item, idx) => (
          <Button key={idx} text={item} />
        ))}
      </div>
      <hr />
      <Button text="메뉴 추천받기" />
      <div>
        <img src="" alt="" />
        <p>짜장면</p>
      </div>
    </div>
  );
};

export default Main;
