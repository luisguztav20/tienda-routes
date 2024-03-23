import styled from "styled-components";
import { Link } from "react-router-dom";
import {colors} from "./theme"


export const Button = styled.button`
    background-color: ${colors.secondary};
    color: ${colors.font};
    border-style: none;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

export const Header = styled.header`
    display: flex;
    background-color: ${colors.header};
    flex-direction: row;
    align-content: center;
    padding: 10px;
    justify-content: space-around;
    color: ${colors.font};
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        align-items: center;
    }
`;

export const StyledLink = styled(Link)`
    color: ${colors.font};
`;

export const BtnLink = styled.button`
    background-color: ${colors.secondary};
    border: none;
    color: ${colors.font};
    margin: 0;
    padding: 30px 50px;
    margin-bottom: 1em;
    border-radius: 5px;
    cursor: pointer;
`;

export const DetailsContent = styled.div`
    background-color: ${colors.secondary};
    width: 50%;
    margin: 0 auto;
    padding: 10px;
    border-radius: 10px;
    margin-top: 20px;
`

export const Container = styled.div`
   width: 80%;
   margin: 0 auto;
   text-align: center;
   display: flex;
   flex-direction: column;
   justify-content: center;

   h2 {
    font-size: 10rem;
    text-align: center;
    margin-bottom: 10px;
    color: ${colors.primary};
   }

   p{
    font-size: 20px;
   }
   h3, h4{
    font-weight: lighter;
   }
   

`
export const ContainerBusq = styled.div`
    width: 70%;
    text-align: center; 
    margin: 0 auto;
    margin-top: 100px;
   ul{
    display: flex;
    justify-content: space-between;
    padding-top: 20px;

   }
  
`