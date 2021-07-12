import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CategoryBtns from "../components/CategoryBtns";
import { Button, Input } from "../elements";
import { actionCreators as resultActions } from "../redux/modules/result";

const Upload = () => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = useState(false);

  const [menuName, setMenuName] = useState("");
  const [img, setImg] = useState(null);
  const [description, setDescription] = useState("");
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

  return (
    <>
      <h2>{editMode ? "추천 메뉴 수정" : "추천 메뉴 등록"}</h2>
      <form encType="multipart/form-data" onSubmit={handleSubmit}>
        <CategoryBtns setCategory={setCategory} />
        <div>
          <span>추천 메뉴 이름</span>
          <Input
            value={menuName}
            _onChange={(e) => setMenuName(e.target.value)}
          />
        </div>
        <div>
          <span>추천 메뉴 이미지 업로드</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImg(e.target.files[0])}
          />
        </div>
        {/* 
        <div>
          <span>미리보기</span>
          <img src="" alt="" />
        </div> */}

        <div>
          <span>메뉴 추천 이유</span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <Button
          text={editMode ? "Menu 수정" : "Menu 업로드"}
          _onSubmit={handleSubmit}
        />
      </form>
    </>
  );
};

export default Upload;
