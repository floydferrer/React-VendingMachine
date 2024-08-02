import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import VendingMachine from './VendingMachine';
import Gatorade from './Gatorade';
import DrPepper from './DrPepper';
import Coffee from './Coffee';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<VendingMachine />} />
          <Route path='/gatorade' element={<Gatorade />} />
          <Route path='/coffee' element={<Coffee />} />
          <Route path='/dr-pepper' element={<DrPepper />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
