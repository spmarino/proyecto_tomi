import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <nav className="menuNavbar">
            <ul>
                <li><Link to="/">HOME</Link></li>  
                <li><Link to="/tienda/categorias/">TIENDA</Link></li>
                <li><Link to="/tienda/categorias/electronics">Hombres</Link></li>
                <li><Link to="/tienda/categorias/jewelery">Mujeres</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>      
            </ul>
        </nav>
    );
}

export default Links;
