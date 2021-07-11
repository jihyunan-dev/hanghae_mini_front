import React from "react";
import { Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reloadAction } from "../redux/modules/result";

const Rank = (props) => {
  const dispatch = useDispatch();
  const rank_list = useSelector((state) => state.result.rank_list);
  const reload = () => {
    dispatch(reloadAction.getRankDB());
  };
  console.log(rank_list);

  // const rankList = [
  //   "짜장면",
  //   "햄버거",
  //   "마라탕",
  //   "순대국밥",
  //   "김치찌개",
  //   "샐러드",
  //   "백반",
  //   "냉면",
  //   "찜닭",
  //   "갈비탕",
  // ];

  return (
    <div>
      <h3>인기 점심 메뉴</h3>

      <div>
        <Button _onClick={reload} text="새로고침" />
        {rank_list.map((reload, idx) => {
          console.log(reload);
          return (
            <div key={idx}>
              <img src={reload.img} alt={reload.name} />
              <p>{reload.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rank;
