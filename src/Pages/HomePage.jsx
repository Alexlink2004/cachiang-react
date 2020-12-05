import React from "react";

import Jumbotron from "../Components/Jumbotron.jsx";
import "./styles/HomePage.css";
function HomePage() {
  return (
    <div className="HomePage">
      <Jumbotron
        title="Acerca de nosotros"
        lead="Somos un grupo de"
        description="a"
        jumboType="jumbo-blue"
        
        
        />


      <h1 className="title"> Mis proyectos:</h1>
      <div>
        <Jumbotron
        title="Agua Doble Vida Systems"
        lead="Sistema de limpiado de agua"
        description="fgjnsirnos"
        buttonText="Saber Mas"
        jumboType="jumbo-light-grey"
        
        />
        <Jumbotron
        title="Agua Doble Vida Systems"
        lead="Sistema de limpiado de agua"
        description="fgjnsirnos"
        buttonText="Saber Mas"
        jumboType="jumbo-dark-grey"
        
        />
        
      </div>
    </div>
  );
}

export default HomePage;
