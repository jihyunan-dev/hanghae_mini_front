import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const MyPost = (props) => {
  const myPostList = [
    {
      postId: 1,
      imgUrl:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      description: "맛있어요!",
    },
    {
      postid: 2,
      imgUrl:
        "https://images.unsplash.com/photo-1432139509613-5c4255815697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1232&q=80",
      description: "오늘 또 먹으러 갑니다:)",
    },
    {
      postid: 3,
      imgUrl:
        "https://images.unsplash.com/photo-1625860633266-8707a63d6671?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "오늘 또 먹으러 갑니다:)",
    },
    {
      postid: 4,
      imgUrl:
        "https://images.unsplash.com/photo-1625860633266-8707a63d6671?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "오늘 또 먹으러 갑니다:)",
    },
  ];

  return (
    <Container>
      {myPostList.map((item) => (
        <Card key={item.postId}>
          <Outer>
            <Inner src={item.imgUrl} alt="" />
          </Outer>
          <div>
            <p>{item.description}</p>
            <div>
              <Button text="수정" />
              <Button text="삭제" />
            </div>
          </div>
        </Card>
      ))}
    </Container>
  );
};

const Container = styled.section`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
  max-width: 1000px;
  margin: 0 auto;
`;

const Card = styled.article`
  height: 300px;
`;

const Outer = styled.div`
  width: 100%;
  min-width: 250px;
`;

const Inner = styled.div`
  position: relative;
  padding-top: 75%;
  overflow: hidden;
  background-image: url("${(props) => props.src}");
  background-size: cover;
`;

export default MyPost;
