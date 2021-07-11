import React from "react";

const ResultBtns = (props) => {
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
