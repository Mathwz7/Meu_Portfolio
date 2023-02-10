import React from "react";
import '../styles/Projetos.css';
import Header from "../header";
import {BrowserRouter, Link } from 'react-router-dom';
export default (props)=>(
    
    <>
      <Header></Header>
      <main className="main">
        
        <Link to="https://mathwz7.github.io/Gerador_de_senha/">
          <div className="container_projetos" id="projeto1">
          </div>
        </Link>
        <div className="container_projetos">
        </div>
        <div className="container_projetos">
        </div>
        
      </main>
    </>
);