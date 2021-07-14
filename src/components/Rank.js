import React from "react";
import styled from "styled-components";
import { Button } from "../elements";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reloadAction } from "../redux/modules/result";
import { actionCreators as resultAction } from "../redux/modules/result";
import { IoReload } from "react-icons/io5";

const Rank = (props) => {
  const dispatch = useDispatch();
  const rankList = useSelector((state) => state.result.rankList) || [];
  React.useEffect(() => {
    dispatch(resultAction.getRankDB());
  }, []);

  const reload = () => {
    dispatch(reloadAction.getRankDB());
  };

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
    <Container>
      <TitleBox>
        <Title>인기 점심 메뉴</Title>
        <ReloadBtn onClick={reload}>
          <IoReload />
        </ReloadBtn>
      </TitleBox>

      <div>
        {rankList.map((reload, idx) => {
          return (
            <div key={idx}>
              <p>{reload.name}</p>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  margin-bottom: ${({ theme }) => theme.paddings.lg};
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
`;

const ReloadBtn = styled.button`
  height: 30px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

export default Rank;
