import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
// Here is the components imported
import CConvert from './Components/CConvert';
import Win from './Components/Win';
import Home from './Components/Home';
import DropDown from './Components/DropDown';

//React Router on top of the App.
const App = () => (
  <BrowserRouter>
     <DropDown/>
    
     <Routes> 
      <Route exact={true} path="/"  element={<Home/>} /> 
     <Route path="/Win" element={<Win/>} /> 
     <Route path="/CConvert" element={<CConvert/>} /> 
     </Routes>
    
  </BrowserRouter>
);
export default App;