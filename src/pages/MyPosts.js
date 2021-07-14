import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as PostActions } from "../redux/modules/user";
import { actionCreators as userAction } from "../redux/modules/user";
import Image from "../elements/Image";

const MyPost = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(userAction.getUserListDB());
  }, []);

  // 유저가 작성한 게시글 리스트 불러오기
  const user_info = useSelector((state) => state.user.user);
  console.log(user_info.postList);

  const myPostList = user_info.postList || [];
  // 삭제 기능
  const deleteMenu = () => {
    dispatch(PostActions.deleteMenuDB());
  };

  return (
    <Container>
      {myPostList.map((item) => (
        <Card key={item.postId}>
          <Image imgUrl={item.img} />
          <div>
            <p>{item.description}</p>
            <p>{item.like}</p>
            <div>
              <Button
                _onClick={() => {
                  history.push(`/upload/${item.id}`);
                }}
                text="수정"
              />
              <Button _onClick={deleteMenu} text="삭제" />
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

export default MyPost;
