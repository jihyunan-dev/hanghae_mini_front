import React from "react";
import Rank from "../components/Rank";
import { Button, Input } from "../elements";

const Result = () => {
  return (
    <>
      <div>
        <p>
          {/* 유저 닉네임 받아오기 */}
          {"__유저 닉네임__"}님이 선택한 오늘의 점심:{" "}
          <h2>{"__선택한 메뉴__"}</h2>
        </p>
        <div>
          <ul>
            <li>
              <h6>닉네임</h6>
              <p>{"댓글내용"}</p>
              {/* 본인이 쓴 댓글인 경우에만 수정, 삭제 */}
              <Button text={"수정"} />
              <Button text={"삭제"} />
              <form>
                <Input type="text" placeholder="댓글을 입력해주세요" />
                <Button type="submit" text={"제출"} />
              </form>
            </li>
          </ul>
        </div>

        <ul>
          {/* menuId에 해당하는 이미지들 map으로 모두 렌더 */}
          <li>
            <img src="" alt="" />
            {/* 본인이 쓴 포스트인 경우에만 수정, 삭제 */}
            <Button text="수정" />
            <Button text="삭제" />
          </li>
        </ul>
      </div>
      <Rank />
    </>
  );
};

export default Result;
