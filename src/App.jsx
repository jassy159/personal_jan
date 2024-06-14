import { useEffect, useState } from "react";
import "./App.css";
import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Maintain from "./pages/Maintainance/Maintain";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0);

  return(
    <>
     
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        
      </Routes>
    </BrowserRouter>
    
  </>
  );
}

export default App;
