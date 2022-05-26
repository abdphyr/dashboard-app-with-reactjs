import { FC } from 'react';
import styled from 'styled-components';
import { dots, topDirect, downDirect } from '../../../images';
import { ICardsInfo } from '../info';
import { useGetTheme } from '../../../ThemeContextProvider';

const Card: FC<{ card: ICardsInfo }> = ({ card }) => {
  const { isDark} = useGetTheme()
  return (
    <CardSC isDark={isDark}>
      <CardTitleSC isDark={isDark}>
        <div>
          {card.title}
        </div>
        <img src={dots} alt="CardImage" />
      </CardTitleSC>
      <CardInfoSC isDark={isDark}>
        <div>
          {card.number} people
        </div>
        <span>
          {card.level} % <img src={card.level > 0 ? topDirect : downDirect} alt="Image" />
        </span>
      </CardInfoSC>
    </CardSC>
  );
};

export default Card;

const CardSC = styled('div')<{isDark: boolean}>`
  background:${p => p.isDark ? "#282C31" : "#FDFDFF"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
  border-radius: 13px;
  width: 341px;
  height: 148px;
  padding: 24px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .1);
  }
`
const CardTitleSC = styled('div')<{isDark: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    transition: all 0.3s ease;
    color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
  }
`
const CardInfoSC = styled("div")<{isDark: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    transition: all 0.3s ease;
    color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
  }
  & > span {
    color:#979797;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    & > img {
      margin-left: 12px;
    }
  }
`