import React from "react";
import '../styles/Contato.css';
import Header from "../header";
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
import {BrowserRouter, Link } from 'react-router-dom';

export default (props)=>(
    
    <>
      <Header></Header>
      <main className="main_contato">
        <div id="container_redes">
          <h2 id="text_siga">Siga-nos</h2>
          <ul>
            <li className="List"><Link to="https://www.linkedin.com/in/matheus-rozario-702271244"><FaLinkedin className="icons"/></Link></li>
            <li className="List"><Link to="mailto:matheusgttrabalho@gmail.com"><FaEnvelope className="icons"/></Link></li>
            <li className="List"><Link to="https://github.com/Mathwz7/"><FaGithub className="icons"/></Link></li>
            <li className="List"><Link to="tel:5511974312473"><FaWhatsapp className="icons"/></Link></li>
          </ul>
        </div>
        <div id="container_form">
          <h1 id="title_form">Formulario de Contato</h1>
          <form method="GET" action="contato" id="form">
            <input type="text" placeholder="Seu nome" className="input_text" required/>
            <input type="email" placeholder="Seu email" className="input_text" required/>
            <input type="text" placeholder="Sua mensagem" id="input_mensagem" required/>
            <input type="submit" value="Enviar" name="enviar" id="btn"/>
          </form>
        </div>
      </main>
    </>
);
