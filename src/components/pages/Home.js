import React from "react";
import '../styles/Home.css';
import Header from "../header";


export default (props)=>(
    
    <>
      <Header></Header>
      <main className="background">
        <conteiner className="texto">
          <h1 id="title">
            Hello, my name is Matheus.                                                   
          </h1>
        </conteiner>
      </main>
    </>
);