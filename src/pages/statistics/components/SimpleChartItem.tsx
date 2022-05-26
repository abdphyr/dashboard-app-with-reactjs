import { FC } from 'react';
import styled from 'styled-components'
import { useGetTheme } from '../../../ThemeContextProvider';

interface SimpleChartProps {
  name: string;
  degree: string;
}

const SimpleChartItem: FC<SimpleChartProps> = ({ name, degree }) => {
  const { isDark } = useGetTheme()
  return (
    <ItemSC>
      <NameDegSC isDark={isDark}>
        <span>
          {name}
        </span>
        <div>
          {degree} %
        </div>
      </NameDegSC>
      <IndicatorSC isDark={isDark} degree={degree}>
        <div></div>
      </IndicatorSC>
    </ItemSC>
  );
};

export default SimpleChartItem;

const ItemSC = styled('div')`
  width: 140px;
  height: 33px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const NameDegSC = styled('div')<{isDark: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    transition: all 0.3s ease;
    color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
  div {
    color: #979797;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
  }
`
const IndicatorSC = styled('div') <{ degree: string, isDark: boolean }>`
  width: 100%;
  height: 10px;
  border-radius: 9px;
  transition: all 0.3s ease;
  background:${p => p.isDark ? "#4D4D4D" : "#EFF3F9"};
  div {
    transition: all 0.3s ease;
    background: #7F7FD5;
    border-radius: 6px;
    height: 10px;
    width: ${p => p.degree ? p.degree : 0}%;
  }
`