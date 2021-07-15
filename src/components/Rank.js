import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as reloadAction } from "../redux/modules/result";
import { actionCreators as resultAction } from "../redux/modules/result";
import { IoReload } from "react-icons/io5";
import { onlyMobile, hiddenMobile } from "../mixin/displayNone";

const Rank = (props) => {
  const dispatch = useDispatch();
  const rankList = useSelector((state) => state.result.rankList) || [];
  React.useEffect(() => {
    dispatch(resultAction.getRankDB());
  }, []);

  const reload = () => {
    dispatch(reloadAction.getRankDB());
  };

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
            <RankItem key={idx}>
              <p>
                {idx + 1}. {reload.name}
              </p>
            </RankItem>
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
  width: 250px;
  height: 100%;
  margin: 70px 0 0 50px;
  margin-bottom: ${({ theme }) => theme.paddings.lg};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 15px;
  padding: 10px;
  position: relative;

  ${({ theme }) => theme.device.desktop} {
    margin-top: 75px;
  }
  ${({ theme }) => theme.device.mobileLg} {
  }
`;

const TitleBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  position: relative;
  display: inline-block;
  margin: 0 auto;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom: 3px solid ${({ theme }) => theme.colors.mainBlue};
  color: ${({ theme }) => theme.colors.mainBlue};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: 600;
`;

const ReloadBtn = styled.button`
  position: absolute;
  top: 8px;
  right: 10px;
  height: 30px;
  padding: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
  font-size: ${({ theme }) => theme.fontSizes.lg};
`;

const RankItem = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 10px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.border};
`;

export default Rank;
