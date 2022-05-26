import { FC, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { pieChartData, pieChartOptions } from './pieInfo';
import styled from 'styled-components';
import { useGetTheme } from '../../../ThemeContextProvider';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart: FC = () => {
  const [data] = useState(pieChartData)
  const {isDark} = useGetTheme()
  return (
    <PieChartSC isDark={isDark}>
      <PieChartTitleSC isDark={isDark}>
        Reach by device
      </PieChartTitleSC>
      <ChartInfoSC className='chartInfo'>
        <ChartSC>
          <div>
            <Pie data={data}
              plugins={[ChartDataLabels]}
              options={{ ...pieChartOptions }}
            />
          </div>
        </ChartSC>
        <InfoSC>
          {Array(pieChartData.labels.length).fill(pieChartData.labels.length).map((_, index) => (
            <InfoItemSC isDark={isDark} key={index}>
              <div style={{ backgroundColor: `${pieChartData.datasets[0].backgroundColor[index]}` }}></div>
              <span>
                {pieChartData.labels[index]}
              </span>
            </InfoItemSC>
          ))}
        </InfoSC>
      </ChartInfoSC>
    </PieChartSC>
  );
};

export default PieChart;
const PieChartSC = styled('div')<{isDark: boolean}>`
  width: 287px;
  height: 242px;
  padding: 24px;
  background:${p => p.isDark ? "#282C31" : "#FDFDFF"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
  transition: all 0.3s ease;
  border-radius: 13px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: all 0.3s ease;
  overflow: hidden;
  &:hover {
    box-shadow: 2px 5px 10px rgba(0, 0, 0, .1);
  }
`
const PieChartTitleSC = styled('div')<{isDark: boolean}>`
  color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const ChartInfoSC = styled('div')`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
`
const ChartSC = styled('div')`
  width: 120px;
  height: 120px;
  display: flex;
  justify-content: flex-start;
  position: relative;
  /* border: 1px solid red; */
  div{
    position: absolute;
    left: -110px;
    top: -90px;
    /* canvas {
      border: 1px solid red;
    } */
  }
  
`
const InfoSC = styled('div')`  
`
const InfoItemSC = styled('div')<{isDark: boolean}>`
  display: flex;
  align-items: center;
  margin-bottom: 11px;
  div {
    width: 16px;
    height: 16px;
    border-radius: 5px;
  }
  span{
    margin-left: 9px;
    color: ${p => p.isDark ? "#CACACA": "#4F4F4F"};
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
`