import React from "react";
import { useSelector } from "react-redux";

const ResultBtns = (props) => {
  // const menuList = useSelector((state) => state.result);
  // console.log(menuList);

  const menuList = [];
  return (
    <>
      {menuList.map((result, idx) => {
        return (
          <div key={idx}>
            <img src={result.img} alt={result.name} />
          </div>
        );
      })}
    </>
  );
};

export default ResultBtns;
