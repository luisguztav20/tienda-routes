import styled from "styled-components";
import { Link } from "react-router-dom";


export const Button = styled.button`
    background-color: #373739;
    color: #EFF3F5;
    border-style: none;
    padding: 10px 15px;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
`;

export const Header = styled.header`
    display: flex;
    background-color: #19191a;
    flex-direction: row;
    align-content: center;
    padding: 10px;
    justify-content: space-around;
    color: #EFF3F5;
    align-items: center;
    img{
        width: 50px;
        height: 50px;
        align-items: center;
    }
`;

export const StyledLink = styled(Link)`
    color: #EFF3F5;
`;

export const BtnLink = styled.button`
    background-color: #373739;
    border: none;
    color: #EFF3F5;
    margin: 0;
    padding: 30px 50px;
    margin-bottom: 1em;
    border-radius: 5px;
    cursor: pointer;
`;

export const DetailsContent = styled.div`
    background-color: #373739;
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
    color: rgb(58, 208, 222);
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