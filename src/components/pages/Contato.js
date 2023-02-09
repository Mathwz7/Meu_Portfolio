import React from "react";
import '../styles/Contato.css';
import Header from "../header";
import { FaLinkedin, FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa";
export default (props)=>(
    
    <>
      <Header></Header>
      <main className="main_contato">
        <div id="container_redes">
          <h2 id="text_siga">Siga-nos</h2>
          <ul>
            <li className="List"><FaLinkedin className="icons"/></li>
            <li className="List"><FaEnvelope className="icons"/></li>
            <li className="List"><FaGithub className="icons"/></li>
            <li className="List"><FaWhatsapp className="icons"/></li>
          </ul>
        </div>
        <div id="container_form">
          <h1 id="title_form">Formulario de Contato</h1>
          <form method="GET" action="contato" id="form">
            <input type="text" placeholder="Seu nome" className="input_text"/>
            <input type="email" placeholder="Seu email" className="input_text"/>
            <input type="text" placeholder="Sua mensagem" id="input_mensagem"/>
            <input type="submit" value="Enviar" name="enviar" id="btn"/>
          </form>
        </div>
      </main>
    </>
);