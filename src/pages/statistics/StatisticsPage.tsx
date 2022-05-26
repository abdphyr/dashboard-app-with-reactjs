import { FC } from 'react';
import { Grid } from '@mui/material'
import styled from 'styled-components';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import { cardsInfo } from './info';
import Card from './components/Card';
import BarChart from './components/BarChart';
import SimpleChart from './components/SimpleChart';

const StatisticsPage: FC = () => {
  return (
    <StatisticsPageSC>
      <Grid container spacing={4}>
        <CardsStatisticsPageCC item container spacing={4} columns={12}>
          {cardsInfo.map((card, index) => (
            <Grid item xs={12} md={6} lg={4} key={index}>
              <Card card={card} />
            </Grid>
          ))}
        </CardsStatisticsPageCC>
        <LinePieChartsStatisticsPageCC item container spacing={4} columns={12}>
          <Grid item>
            <LineChart />
          </Grid>
          <Grid item >
            <PieChart />
          </Grid>
        </LinePieChartsStatisticsPageCC>
        <BarChartsStatisticsPageCC item container spacing={4} columns={12}>
          <Grid item>
            <BarChart />
          </Grid>
          <Grid item>
            <SimpleChart />
          </Grid>
        </BarChartsStatisticsPageCC>
      </Grid>
    </StatisticsPageSC>
  );
};

export default StatisticsPage;

const StatisticsPageSC = styled('div')`
  margin-top: 40px;
`
const CardsStatisticsPageCC = Grid
const LinePieChartsStatisticsPageCC = Grid
const BarChartsStatisticsPageCC = Grid