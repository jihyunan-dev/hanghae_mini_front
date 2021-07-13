import React from "react";
import styled from "styled-components";
import Image from "../elements/Image";

const Detail = (props) => {
  const { menu } = props;
  if (menu) {
    const {
      img,
      name,
      id: menuId,
      category1,
      category2,
      category3,
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
        </div>
      </Card>
    );
  }
};

const Card = styled.article``;

export default Detail;
