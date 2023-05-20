import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from './component/Home';
import Getdata from './component/Getdata';
import Nav from './component/Nav';

const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Nav/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Add" element={<Getdata />} />
    </Routes>
    </BrowserRouter>
    
    </div>
  )
}

export default App