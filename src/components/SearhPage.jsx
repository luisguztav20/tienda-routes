import React from "react";
import { ContainerBusq, StyledLink, BtnLink } from "../estilos-componentes/styles-comp";


const SearchPage = () => {
    const celulares = [
      "Samsung",
      "LG",
      "Xiaomi",
      "iphone",
      "Honor"
    ];
  
    return(
      <ContainerBusq>
        <h3>Modelos</h3>
        <ul>
          {celulares.map((celular) => (
            <li key={celular}>
                <StyledLink to={`/celulares/${celular}`}><BtnLink>{celular}</BtnLink></StyledLink>
            </li>
          ))}
        </ul>
      </ContainerBusq>
    );
  }

  
export default SearchPage;