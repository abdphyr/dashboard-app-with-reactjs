import { FC } from 'react';
import styled from 'styled-components'
import { barInfo, barOptions } from './barInfo';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { useGetTheme } from '../../../ThemeContextProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
);

const BarChart: FC = () => {
  const { isDark } = useGetTheme()
  return (
    <BarChartSC isDark={isDark}>
      <InfoBarChartSC>
        <InfoTitleSC isDark={isDark}>
          Gender / Age
        </InfoTitleSC>
        <InfoSC>
          {Array(barInfo.datasets.length).fill(barInfo.datasets.length).map((_, index) => (
            <InfoItemSC isDark={isDark} key={index}>
              <div style={{ backgroundColor: `${barInfo.datasets[index].backgroundColor}` }}></div>
              <span>
                {barInfo.datasets[index].label}
              </span>
            </InfoItemSC>
          ))}
        </InfoSC>
      </InfoBarChartSC>
      <ChartSC>
        <Bar data={barInfo} plugins={[ChartDataLabels]} options={barOptions(isDark)} />
      </ChartSC>
    </BarChartSC>
  );
};

export default BarChart;

const BarChartSC = styled('div') <{ isDark: boolean }>`
  width: 674px;
  height: 242px;
  padding: 0 24px;
  background:${p => p.isDark ? "#282C31" : "#FDFDFF"};
  border: 1px solid ${p => p.isDark ? "#4D4D4D" : "#EBEBEB"};
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
const InfoBarChartSC = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 24px;
`
const InfoTitleSC = styled('div') <{ isDark: boolean }>`
  color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const InfoSC = styled('div')`  
  display:flex;
  align-items: center;
`
const InfoItemSC = styled('div') <{ isDark: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 11px;
  div {
    width: 16px;
    height: 16px;
    border-radius: 5px;
  }
  span{
    margin-left: 9px;
    color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
`
const ChartSC = styled('div')`
`