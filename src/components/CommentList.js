import React from "react";
import { Button } from "../elements";

const CommentList = (props) => {
  const commentList = [];

  return (
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
  );
};

export default CommentList;
