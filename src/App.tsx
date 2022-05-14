import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import './app.css';
import Navbar from './components/Navbar';

const App: FC = () => {
  return (
    <>
      <Navbar />
      <div className='app'>
        <Routes>
          <Route path='/one' element={<div>First Route</div>} />
          <Route path='/two' element={<div>Second Route</div>} />
          <Route path='/three' element={<div>Third Route</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
