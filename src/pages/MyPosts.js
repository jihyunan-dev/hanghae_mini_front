import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { useSelector } from "react-redux";

const MyPost = (props) => {
  // 유저가 작성한 게시글 리스트 불러오기
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info.postList);

  const myPostList = user_info.postList;

  return (
    <Container>
      {myPostList.map((item) => (
        <Card key={item.postId}>
          <Outer>
            <Inner src={item.imgUrl} alt="" />
          </Outer>
          <div>
            <p>{item.description}</p>
            <p>{item.like}</p>
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
