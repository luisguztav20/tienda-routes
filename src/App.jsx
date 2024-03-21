import React from "react";
import './App.css';
import logo from './assets/logo.png';
import { Routes, Route, Link, useParams, Outlet, NavLink as NL} from "react-router-dom";
import { Button, Header, StyledLink, BtnLink, DetailsContent, Container, ContainerBusq} from "./components/styles-comp";

const Home = () => {
  return(
    <div className="features">
      <h2>Bienvenido</h2>
      <p>Somos una tienda online de celulares</p>
      <Link to='/search-page'><Button>Ver mas</Button></Link>
    </div>

  );
}
const dataCelu = {
  Samsung: {
    modelo: "A54",
    precio: "$500.00",
    desc: "Resistente al agua"
  },
  LG: {
    modelo: "ThinQ v60",
    precio: "$550.00",
    desc: "Pantalla de varias pulgadas"
  },
  Xiaomi: {
    modelo: "Poco c40",
    precio: "$400.00",
    desc: "Calidad Precio"
  },
  iPhone: {
    modelo: "XR",
    precio: "$9,999.00",
    desc: "Cámara bonita!"
  },
};

const SearchPage = () => {
  const celulares = [
    "Samsung",
    "LG",
    "Xiaomi",
    "iphone"
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

//componente para encapsular todo el Navlink
// los 3 puntos son los sprentl

const NavLink = ({to, children, ...props}) => {
  return(
    <NL {...props} 
    className={
      ({isActive}) => {
      return isActive ? 'is-active' : undefined
    }}
    to={to}> 
    {children} 
    </NL>
  );
}

function App() {

  return(

    <div>
      <Header>
        <img src={logo} alt="" />
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/search-page">Pagina de busqueda</NavLink>
            </li>
          </ul>
        </nav>
      </Header>

      <Container>
        <Routes>
          <Route path="/" element={ <Home /> }/>
          <Route path="/search-page" element={ <SearchPage /> }/>
          <Route path="/celulares/:nameCelular" element={ <Celulares /> }>
           <Route path="details" element={ <CelularDetails /> }/>
          </Route>
         <Route path="*" element= { <h1>Page Not Found</h1>} />
        
        </Routes>
      </Container>
      
    </div>
  )
  
}

export default App;