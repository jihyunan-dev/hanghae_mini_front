import React from "react";
import Button from "../elements/Button";

import Rank from "../components/Rank";
import { Input } from "../elements";

const Main = () => {
  // 카테고리 정리 필요
  const category1 = ["채식", "육식 + 채식"];
  const category2 = ["한식", "중식", "양식", "일식"];
  const category3 = ["혼밥", "친구", "연인", "가족", "모임"];
  const count = ["1가지", "2가지", "3가지"];

  // 가짜 데이터
  const resultList = [
    {
      name: "햄버거",
      id: 12,
      img: "https://images.unsplash.com/photo-1598182198871-d3f4ab4fd181?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhbWJ1cmdlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60",
    },
  ];

  const commentList = [];

  return (
    <>
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
        {resultList.map((result, idx) => {
          return (
            <div key={idx}>
              <img src={result.img} alt={result.name} />
            </div>
          );
        })}
      </div>
      <Rank />
      <form>
        <Input type="text" placeholder="댓글을 입력해주세요" />
        <Button text={"제출"} />
      </form>
      <ul>
        {commentList.map((comment, idx) => {
          return (
            <li>
              <h6>닉네임</h6>
              <p>{"댓글내용"}</p>
              {/* 본인이 쓴 댓글인 경우에만 수정, 삭제 */}
              <Button text={"수정"} />
              <Button text={"삭제"} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Main;
