// myPosts.js
import React, { useEffect } from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { history } from "../redux/configureStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as PostActions } from "../redux/modules/user";
import { actionCreators as userAction } from "../redux/modules/user";
import Image from "../elements/Image";
import { container } from "../mixin/container";
import { IoIosHeart } from "react-icons/io";

const MyPost = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction.getUserListDB());
  }, []);

  // 유저가 작성한 게시글 리스트 불러오기
  const myPostList = useSelector((state) => state.user.postList) || [];

  // 삭제 기능
  const deleteMenu = (id) => {
    dispatch(PostActions.deleteMenuDB(id));
  };

  return (
    <Container>
      <Grid>
        {myPostList.map((item) => (
          <Card key={item.id}>
            <Image imgUrl={`http://3.36.91.31${item.img}`} />
            <TextBox>
              <Description>
                {item.description.length > 100
                  ? item.description.substr(0, 50)
                  : item.description}
              </Description>
              <HeartBox>
                <IoIosHeart />
                <p>{item.like}</p>
              </HeartBox>

              <Btns>
                <Button
                  _onClick={() => {
                    history.push(`/upload/${item.id}`);
                  }}
                  text="수정"
                />
                <Button
                  _onClick={() => {
                    deleteMenu(item.id);
                  }}
                  text="삭제"
                />
              </Btns>
            </TextBox>
          </Card>
        ))}
      </Grid>
    </Container>
  );
};

const Container = styled.section`
  ${container};
  margin: 0 auto;

  ${({ theme }) => theme.device.desktop} {
    max-width: 1000px;
  }
`;

const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  gap: 20px;
  grid-template-columns: minmax(250px, 1fr);

  ${({ theme }) => theme.device.mobileLg} {
    grid-template-columns: repeat(2, minmax(250px, 1fr));
  }

  ${({ theme }) => theme.device.desktop} {
    grid-template-columns: repeat(3, minmax(250px, 1fr));
  }
`;

const Card = styled.article`
  min-height: 300px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`;

const TextBox = styled.div`
  position: relative;
  width: 100%;
  height: calc(300px - (250px * 0.75));
  padding: ${({ theme }) => theme.paddings.sm};

  ${({ theme }) => theme.device.mobileLg} {
    padding: 20px;
  }
`;

const Description = styled.p`
  height: 50px;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${({ theme }) => theme.device.mobileLg} {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;

const HeartBox = styled.div`
  position: absolute;
  bottom: 40px;
  right: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: #ea2027;
  font-weight: 600;
  font-size: ${({ theme }) => theme.fontSizes.sm};

  ${({ theme }) => theme.device.mobileLg} {
    right: 20px;
  }
`;

const Btns = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 30px;
`;

export default MyPost;
