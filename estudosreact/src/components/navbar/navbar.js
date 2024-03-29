import React from "react";
import './navbar.css';

const Navbar = () => {
    return (
        
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <a className="navbar-link" href="#home">Home</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="#experiencia">Experiência</a>
                </li>
                <li className="navbar-item">
                    <a className="navbar-link" href="#contato">Contato</a>
                </li>
            </ul>
        </nav>
        
    )
}

export default Navbar;