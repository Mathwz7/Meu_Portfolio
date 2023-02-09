import React from "react";
import "./styles/header.css"
import {BrowserRouter, Link } from 'react-router-dom';


export default props=>{
    return(
        <header className="header">
            <div className="content">
                    <li className="list"><Link to="/" className="text">Home</Link></li>
                    <li className="list"><Link to="/Projetos" className="text">Projetos</Link></li>
                    <li className="list"><Link to="/Sobre" className="text">Sobre</Link></li>
                    <li className="list"><Link to="/Contato" className="text">Contato</Link></li>
            </div>
        </header>
        
    );
}