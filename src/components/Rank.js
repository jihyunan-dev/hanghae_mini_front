import React from "react";

const Rank = (props) => {
  const rankList = [
    "짜장면",
    "햄버거",
    "마라탕",
    "순대국밥",
    "김치찌개",
    "샐러드",
    "백반",
    "냉면",
    "찜닭",
    "갈비탕",
  ];

  return (
    <div>
      <h3>인기 점심 메뉴</h3>
      <ul>
        {rankList.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Rank;
