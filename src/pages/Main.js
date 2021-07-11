import React from "react";
import Button from "../elements/Button";

import Rank from "../components/Rank";
import { Input } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as resultAction } from "../redux/modules/result.js";
import { RESP } from "../shared/response";

const Main = (props) => {
  const dispatch = useDispatch();
  const menu_list = useSelector((state) => state.result.list);
  // 카테고리 정리 필요
  const category1 = ["채식", "육식 + 채식"];
  const category2 = ["한식", "중식", "양식", "일식"];
  const category3 = ["혼밥", "친구", "연인", "가족", "모임"];
  const count = ["1가지", "2가지", "3가지"];

  // 유저 불러오기
  const {
    result: { user },
  } = RESP.LOGIN_SUCCESS;

  // 코멘트 불러오기
  const { result: commentList } = RESP.COMMENT_SUCCESS;

  // 메뉴 추천받기!
  const result = () => {
    dispatch(resultAction.getMenuDB());
  };

  return (
    <>
      <div>
        <p>{user.name}님의 오늘 점심 추천</p>
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
        <Button _onClick={result} text="메뉴 추천받기" />
        {menu_list.map((result, idx) => {
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
            <li key={idx}>
              <h6>{comment.nickname}</h6>
              <p>{comment.comment}</p>
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
