import React from "react";

import Jumbotron from "../Components/Jumbotron.jsx";
import "./styles/HomePage.css";
function HomePage() {
  let lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  let loremSM =
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="HomePage">
      <Jumbotron
        title="Acerca de nosotros"
        lead={loremSM}
        description={lorem}
        jumboType="jumbo-blue"
        buttonText="Linkedin"
        buttonLink="https://www.linkedin.com/in/adrian-c%C3%A1rdenaschiang1512/"
      />

      <h1 className="title"> Mis proyectos:</h1>
      <div>
        <Jumbotron
          title="Agua Doble Vida Systems"
          lead="Sistema de limpiado de agua"
          description={lorem}
          buttonText="Saber Mas"
          jumboType="jumbo-light-grey"
          buttonLink="#/404"
        />
        <Jumbotron
          title="Otro proyecto perro del adrian "
          lead="Sin duda estara perro xD"
          description={lorem}
          buttonText="Saber Mas"
          jumboType="jumbo-dark-grey"
          buttonLink="#/404"
        />
      </div>
      <footer className=" footer footer-container">
        <div className="container footer-style">
          <div className="row">
            <div className="col-sm-12 col-md-6 footer-style">
              <span className="text-muted">© Alejandro Apodaca Cordova</span>
              <br />
            </div>
            <div className="col-sm-12 col-md-6 footer-style">
              <span className="text-muted">Company: ApoApps</span>
              <br />
              
            </div>
            <div className="col-12 ">
            <span className="btn btn-dark">
                <a href="https://Apodapps.com" className="link">Visit ApoApps Page</a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
