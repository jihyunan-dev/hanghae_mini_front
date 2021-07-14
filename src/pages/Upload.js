import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryBtns from "../components/CategoryBtns";
import { Button, Input } from "../elements";
import { actionCreators as resultActions } from "../redux/modules/result";
import { actionCreators as userActiocs } from "../redux/modules/user";

const Upload = (props) => {
  const dispatch = useDispatch();
  const my_list = useSelector((state) => state.user.user.postList);

  const post_id = props.match.params.id;
  const is_edit = post_id ? true : false;

  let _post = is_edit ? my_list.find((p) => String(p.id) === post_id) : null;

  const [editMode, setEditMode] = useState(_post ? _post.editMode : "");

  const [menuName, setMenuName] = useState(_post ? _post.name : "");
  const [img, setImg] = useState(null);
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

  const editPost = () => {
    dispatch(userActiocs.editMenuDB());
  };

  return (
    <>
      <h2>{is_edit ? "추천 메뉴 수정" : "추천 메뉴 등록"}</h2>
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
        {is_edit ? (
          <Button text="Menu 수정" _onClick={editPost} />
        ) : (
          <Button text="Menu 업로드" _onSubmit={handleSubmit} />
        )}
      </form>
    </>
  );
};

export default Upload;
