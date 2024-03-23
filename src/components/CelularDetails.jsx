import React from "react";
import { DetailsContent } from "../estilos-componentes/styles-comp";
import dataCelu from "../data/DataCelu";
import { useParams } from "react-router-dom";

const CelularDetails = () => {
    const {nameCelular} = useParams();
    const detalles = dataCelu[nameCelular]
  
    return (
      <DetailsContent>
        <h3>Detalles del movil { nameCelular} </h3>
        <h4>Modelo: {detalles.modelo}</h4>
        <h4>Precio: {detalles.precio}</h4>
        <h4>Descripcion: {detalles.desc}</h4>
      </DetailsContent>
    );
  }

  
export default CelularDetails;