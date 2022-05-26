import styled from 'styled-components'

export const CustomSVG = styled('svg')<{active: boolean}>`
  path {
    transition: all 0.5s ease;
    fill: ${p => p.active ? "#7F7FD5" : "#DFE6F1"}
  }
`