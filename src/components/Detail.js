import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import Image from "../elements/Image";
import { IoIosHeartEmpty, IoIosHeart } from "react-icons/io";
import { actionCreators as ResultActions } from "../redux/modules/result";

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
    User: { id: userId, nickName },
  } = menu;
  return (
    <Card>
      <div>
        <Image imgUrl={img} />
      </div>
      <div>
        {/* category 라벨들 만들어주기*/}
        <h3>{name}</h3>
        <p>작성자: {nickName}</p>
        {isLike ? (
          <IoIosHeart />
        ) : (
          <IoIosHeartEmpty onClick={() => clickLike(menuId)} />
        )}
        <span>{currentLike}</span>
      </div>
    </Card>
  );
};

const Card = styled.article``;

export default Detail;
