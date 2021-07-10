import React from "react";
import { Button, Input } from "../elements";

const Upload = () => {
  return (
    <>
      <div>
        <div>Menu 업로드</div>
        {/* {edit모드 ? "Menu 수정" : "Menu 업로드"} */}
        <input />
      </div>

      <div>
        <h2>미리보기</h2>
        <image />
      </div>

      <div>
        <Input label="Menu" placeholder="Menu를 소개해주세요!"></Input>
      </div>

      <div>
        {/* {edit모드 ? "Menu 수정" : "Menu 업로드"} */}
        <Button text="Menu 업로드"></Button>
      </div>
    </>
  );
};

export default Upload;
