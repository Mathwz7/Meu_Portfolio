import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from "./components/header";
import Contato from "./components/pages/Contato";
import Home from "./components/pages/Home";
import Projetos from "./components/pages/Projetos";
import Sobre from "./components/pages/Sobre";

export default (props)=>(
    
    
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Contato" element={<Contato/>} />
          <Route path="/Projetos" element={<Projetos/>} />
          <Route path="/Sobre" element={<Sobre/>} />
        </Routes>
      </Router>
);