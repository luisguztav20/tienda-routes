import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../estilos-componentes/styles-comp";

const Home = () => {
    return(
      <div className="features">
        <h2>Bienvenido</h2>
        <p>Somos una tienda online de celulares</p>
        <Link to='/search-page'><Button>Ver mas</Button></Link>
      </div>
  
    );
  }
  
export default Home;