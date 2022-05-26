import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainPage, StatisticsPage } from '../pages';

const RootRoute: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<StatisticsPage />}/>
      <Route path='/statistics' element={<StatisticsPage />}/>
    </Routes>
  );
};

export default RootRoute;