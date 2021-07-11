import React from "react";
import { Button } from "../elements";

const CommentList = (props) => {
  const { list } = props;
  return (
    <ul>
      {list.map((comment, idx) => {
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

CommentList.defaultProps = {
  list: [],
};

export default CommentList;
