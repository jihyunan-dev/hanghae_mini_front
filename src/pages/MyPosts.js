import React from "react";

const MyPost = (props) => {
  const myPostList = [
    {
      postId: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    },
    {
      postid: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80",
    },
  ];
  return (
    <div>
      <ul>
        {myPostList.map((item) => (
          <li>
            <img src={item.imgUrl} alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyPost;
