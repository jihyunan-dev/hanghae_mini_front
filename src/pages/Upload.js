import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import CategoryBtns from "../components/CategoryBtns";
import { Button, Input, Title } from "../elements";
import { actionCreators as resultActions } from "../redux/modules/result";
import { actionCreators as userActiocs } from "../redux/modules/user";
import { container } from "../mixin/container";

const Upload = (props) => {
  const dispatch = useDispatch();
  const my_list = useSelector((state) => state.user.postList);
  console.log(my_list);
  const post_id = props.match.params.id;
  console.log(post_id);
  const is_edit = post_id ? true : false;
  console.log(is_edit);

  let _post = is_edit ? my_list.find((p) => String(p.id) === post_id) : null;
  console.log(_post);
  console.log(_post.id);
  const [menuName, setMenuName] = useState(_post ? _post.name : "");
  const [img, setImg] = useState(_post ? _post.img : "");
  const [description, setDescription] = useState(
    _post ? _post.description : ""
  );

  const [category, setCategory] = useState({
    category1: null,
    category2: null,
    category3: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !menuName ||
      !description ||
      !img ||
      !category.category1 ||
      !category.category2 ||
      !category.category3
    )
      return;

    const dataObj = {
      ...category,
      name: menuName,
      description,
      img,
    };

    dispatch(resultActions.addMenuDB(dataObj));
  };

  const editPost = (id) => {
    if (
      !menuName ||
      !description ||
      !category.category1 ||
      !category.category2 ||
      !category.category3
    )
      return;

    const dataObj = {
      ...category,
      name: menuName,
      description,
    };
    dispatch(userActiocs.editMenuDB(dataObj, id));
  };

  return (
    <Container>
      <Title>{is_edit ? "추천 메뉴 수정" : "추천 메뉴 등록"}</Title>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <CategoryBtns
          initial={
            is_edit
              ? {
                  first: _post.category1,
                  second: _post.category2,
                  third: _post.category3,
                }
              : {
                  first: "채식",
                  second: "식사",
                  third: "한식",
                }
          }
          setCategory={setCategory}
        />
        <RowBox>
          <Subtitle>추천 메뉴 이름</Subtitle>
          {is_edit ? (
            <Input value={menuName} />
          ) : (
            <Input
              value={menuName}
              _onChange={(e) => setMenuName(e.target.value)}
            />
          )}
        </RowBox>
        <RowBox>
          {is_edit ? (
            ""
          ) : (
            <>
              <Subtitle>추천 메뉴 이미지 업로드</Subtitle>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </>
          )}
        </RowBox>
        {/* 
        <div>
          <span>미리보기</span>
          <img src="" alt="" />
        </div> */}

        <RowBox>
          <Subtitle>메뉴 추천 이유</Subtitle>
          <Description
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></Description>
        </RowBox>
        {is_edit ? (
          <Button
            btnName="submit"
            text="메뉴 수정"
            _onClick={() => {
              editPost(_post.userId);
            }}
          />
        ) : (
          <Button
            btnName="submit"
            text="메뉴 업로드"
            _onSubmit={handleSubmit}
          />
        )}
      </form>
    </Container>
  );
};

const Container = styled.div`
  ${container};

  ${({ theme }) => theme.device.tablet} {
    margin-top: 20px;
  }

  ${({ theme }) => theme.device.desktop} {
    max-width: 1000px;
  }
`;

const Subtitle = styled.h4`
  margin-bottom: 10px;
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
`;

const RowBox = styled.div`
  margin-top: 30px;
  margin-bottom: 20px;
`;

const Description = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.mainBlue};
  resize: none;
`;

export default Upload;
