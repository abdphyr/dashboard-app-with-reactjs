import styled from 'styled-components'

export const CustomSvgSC = styled('svg')<{active: boolean}>`
  path {
    transition: all 0.5s ease;
    fill: ${p => p.active ? "#7F7FD5" : "#DFE6F1"}
  }
`
export const CustomPathFillSC = styled('path')<{isDark: boolean}>`
  transition: all 0.5s ease;
  fill: ${p => p.isDark ? "#CACACA" : "#979797"};
`
export const CustomPathStrokeSC = styled('path')<{isDark: boolean}>`
  transition: all 0.5s ease;
  stroke: ${p => p.isDark ? "#CACACA" : "#5B5B5B"};
`