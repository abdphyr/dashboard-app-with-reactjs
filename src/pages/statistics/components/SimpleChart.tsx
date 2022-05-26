import { FC, useState } from 'react';
import styled from 'styled-components';
import { simpleInfo } from './simpleInfo';
import SimpleChartItem from './SimpleChartItem';
import { useGetTheme } from '../../../ThemeContextProvider';

const SimpleChart: FC = () => {
  const [info] = useState(simpleInfo)
  const { isDark } = useGetTheme()
  return (
    <SimpleChartSC isDark={isDark}>
      <InfoSimpleChartSC>
        <TitleSC isDark={isDark}>
          Geo
        </TitleSC>
        <DescSC>
          <DescItemSC isDark={isDark} select={true}>
            Country
          </DescItemSC>
          <DescItemSC isDark={isDark} select={false}>
            City
          </DescItemSC>
        </DescSC>
      </InfoSimpleChartSC>
      <ChartSimpleSC>
        {info.data.map((item, index) => (
          <SimpleChartItem name={item.name} degree={item.degree} key={index} />
        ))}
      </ChartSimpleSC>
    </SimpleChartSC>
  );
};

export default SimpleChart;

const SimpleChartSC = styled('div')<{isDark: boolean}>`
  background:${p => p.isDark ? "#282C31" : "#FDFDFF"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
  border-radius: 13px;
  width: 380px;
  height: 242px;
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
const InfoSimpleChartSC = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TitleSC = styled('div')<{isDark: boolean}>`
  transition: all 0.3s ease;
  color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const DescSC = styled('div')`
  display: flex;
  align-items: center;
`
const DescItemSC = styled('div') <{ select: boolean, isDark: boolean }>`
  cursor: pointer;
  margin-left: 10px;
  transition: all 0.3s ease;
  color: ${p => p.select ? p.isDark ? "#CACACA": "#4F4F4F" : "#979797"};
  font-weight: 600;
  font-size: 12px;
  line-height: 14px;
`
const ChartSimpleSC = styled('div')`
  display: flex;
  flex-wrap: wrap;
  width: 332px;
  height: 140px;
  justify-content: space-between;
`