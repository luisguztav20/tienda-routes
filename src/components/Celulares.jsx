import React from "react";
import { Button, StyledLink } from "../estilos-componentes/styles-comp";
import { useParams, Outlet } from "react-router-dom";


const Celulares = () => {
    const { nameCelular } = useParams();
    return(
      <div>
        <h3>Informacion sobre el celular</h3>
        <h3>Modelo { nameCelular}</h3>
        <StyledLink to='details'><Button>Ver detalles</Button></StyledLink>
        <Outlet />
      </div>
    );
  };

export default Celulares;