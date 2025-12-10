import { BrowserRouter } from 'react-router-dom'
import React from "react";
import MainPage from './MainPage';
const App=()=>{
  return(
    <BrowserRouter>
        <MainPage/>
      </BrowserRouter>
  );
};

export default App;