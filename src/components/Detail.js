import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Image from "../elements/Image";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { actionCreators as ResultActions } from "../redux/modules/result";
import Comment from "./Comment";

const Detail = (props) => {
  const { menu } = props;
  const dispatch = useDispatch();

  const [isLike, setIsLike] = useState(false);
  const [currentLike, setCurrentLike] = useState(menu.like ? menu.like : null);

  useEffect(() => {
    setIsLike(false);
    setCurrentLike(menu.like);
  }, [menu]);

  const clickLike = (menuId) => {
    if (!isLike) {
      setIsLike(true);
      setCurrentLike(currentLike + 1);
      dispatch(ResultActions.likeMenuDB(menuId));
    }
  };

  const {
    img,
    name,
    id: menuId,
    category1,
    category2,
    category3,
    like,
    User: { id: userId, nickname },
    description,
  } = menu;

  return (
    <>
      <Card>
        <CardSection>
          <Image imgUrl={`http://3.36.91.31${img}`} />
        </CardSection>
        <TextSection>
          {/* category 라벨들 만들어주기*/}
          <Title>{name}</Title>
          <Author>작성자: {nickname}</Author>
          <p>{description}</p>
          <LikeBox>
            <HeartBtn isLike={isLike}>
              {isLike ? (
                <IoIosHeart />
              ) : (
                <IoIosHeartEmpty onClick={() => clickLike(menuId)} />
              )}
            </HeartBtn>
            <HeartNum>{currentLike}</HeartNum>
          </LikeBox>
        </TextSection>
      </Card>
      <Comment menuId={menuId} />
    </>
  );
};

const Card = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: ${({ theme }) => theme.paddings.md} 0;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

  ${({ theme }) => theme.device.tablet} {
    flex-direction: row;
  }
`;

const CardSection = styled.div`
  min-height: 150px;
  ${({ theme }) => theme.device.tablet} {
    width: 50%;
  }
`;

const TextSection = styled(CardSection)`
  position: relative;
  padding: ${({ theme }) => theme.paddings.sm};

  ${({ theme }) => theme.device.tablet} {
    padding: ${({ theme }) => theme.paddings.md};
  }
`;

const Title = styled.h3`
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: 600;

  ${({ theme }) => theme.device.tablet} {
    margin-bottom: 15px;
  }
`;

const Author = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 600;
  margin-bottom: 20px;
`;

const LikeBox = styled.div`
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  align-items: center;

  ${({ theme }) => theme.device.tablet} {
    left: 30px;
  }
`;

const HeartBtn = styled.button`
  font-size: 24px;
  color: ${({ isLike }) => (isLike ? "#EA2027" : "lightGray")};

  ${({ theme }) => theme.device.tablet} {
    font-size: 28px;
  }
`;

const HeartNum = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
  margin-left: 5px;
  margin-bottom: 6px;

  ${({ theme }) => theme.device.tablet} {
    font-size: 20px;
  }
`;

export default Detail;
