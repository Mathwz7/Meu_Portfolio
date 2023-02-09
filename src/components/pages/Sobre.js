import React from "react";
import '../styles/Sobre.css';
import Header from "../header";
export default (props)=>(
    
    <>
      <Header></Header>
      <main className="container_sobre">

        <div id="container_photo">
          <div id="photo"/>
        </div>

        <div id="container_text">
          <h1 id="titulo">Sobre Mim</h1>
          <p className="p">Olá, me chamo Matheus Barbosa do Rozario e atualmente tenho 18 anos, sou um desenvolvedor web FullStack.</p>
          <h2>Minhas compentêcias</h2>
          <p className="p">Html - Css - PhP - Java Script - Mysql - React</p>
        </div>

      </main>
    </>
);