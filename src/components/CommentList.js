import React from "react";
import CommentBox from "./CommentBox";

const CommentList = (props) => {
  const { list } = props;

  return (
    <div>
      {list.map((comment, idx) => {
        return <CommentBox key={idx} comment={comment} />;
      })}
    </div>
  );
};

CommentList.defaultProps = {
  list: [],
};

export default CommentList;
