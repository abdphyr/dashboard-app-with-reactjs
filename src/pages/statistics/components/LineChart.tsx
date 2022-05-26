import { FC, Fragment, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, PointElement, LineElement, Title } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import styled from 'styled-components';
import { lineOptions, lineData } from './lineInfo';
import { profOpener } from '../../../images';
import { useGetTheme } from '../../../ThemeContextProvider';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
);

const LineChart: FC = () => {
  const [lineD, setLineD] = useState(lineData)
  const { isDark } = useGetTheme()
  const handleCheckbox = (label: string) => {
    if (lineD.datasets.find(item => item.label === label)) {
      setLineD({ ...lineD, datasets: lineD.datasets.filter(item => item.label !== label) })
    } else {
      const line = lineData.datasets.find(item => item.label === label)
      const lineIndex = lineData.datasets.findIndex(item => item.label === label)
      if (line && lineIndex >= 0) {
        const newLine = { ...lineD }
        newLine.datasets.splice(lineIndex, 0, line)
        setLineD({ ...lineD, datasets: newLine.datasets })
      }
    }
  }
  useEffect(() => { }, [lineD])
  return (
    <LineChartSC isDark={isDark}>
      <LnChartInfoSC>
        <TitleSC isDark={isDark}>
          Audience reach
        </TitleSC>
        <ToolsSC>
          <SelectSC isDark={isDark}>
            <div>
              31/01/2020 – 06/02/2020
            </div>
            <span>
              <img src={profOpener} alt="Image" />
            </span>
          </SelectSC>
          <CheckBoxLineSC isDark={isDark}>
            {lineData.datasets.map((line, index) => (
              <Fragment key={index}>
                <span>
                  {line.label}
                </span>
                <CheckBoxLineItemSC
                  onClick={() => handleCheckbox(line.label)}
                  color={line.borderColor}>
                  {lineD.datasets.find(item => item.label === line.label) &&
                    <div>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 3.22863L4.27277 7L7 1" stroke={line.borderColor} stroke-linecap="round" stroke-linejoin="round" />
                      </svg>
                    </div>
                  }
                </CheckBoxLineItemSC>
              </Fragment>
            ))}
          </CheckBoxLineSC>
        </ToolsSC>
      </LnChartInfoSC>
      <ChartSC>
        <Line data={lineD} options={lineOptions(isDark)} />
      </ChartSC>
    </LineChartSC>
  );
};

export default LineChart;
const LineChartSC = styled('div') <{ isDark: boolean }>`
  width: 768px;
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
const ChartSC = styled('div')`
  width: 716px;
  height: 141px;  
  /* border: 1px solid red; */
  padding: 0 10px;
  canvas {
    width: 716px;
    height: 141px;  
  }
`
const LnChartInfoSC = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 27px;
`
const TitleSC = styled('div') <{ isDark: boolean }>`
  color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
  transition: all 0.3s ease;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
`
const ToolsSC = styled('div')`
  display: flex;
  align-items: center;
`
const SelectSC = styled('div') <{ isDark: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  div {
    margin-right: 11px;
    color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
    transition: all 0.3s ease;
  }
`
const CheckBoxLineSC = styled('div') <{ isDark: boolean }>`
  display: flex;
  align-items: center;
  margin-left: 32px;
  span {
    color: ${p => p.isDark ? "#CACACA" : "#4F4F4F"};
    transition: all 0.3s ease;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    margin-right: 6px;
    margin-left: 12px;
  }
`
const CheckBoxLineItemSC = styled('div')`
  width: 16px;
  height: 16px;
  border: 1.5px solid ${p => p.color};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`