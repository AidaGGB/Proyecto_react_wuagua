import './Error404.css';
import error from './error404.jpeg';
import logo from './logotipo2.png';
import home from './home.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Error404 () {
    return (
    <div className="container-fluid containere overflow-hidden">
        <div className="row">
        <div className="padres row mb-2">
                <div className="logo2 col-sm-12 col-md-11 col-lg-11">

                    <img src={logo}/>

                    <h5 className="tituloquien">Por ti y para tus hijos SIEMPRE.</h5>
                </div>							
                <div className="home col-sm-12 col-md-1 col-lg-1">
                    <Link to="/home"><img src={home} width="50px"/></Link>
                </div>
           
                 <div className="error col-sm-12 col-md-12 col-lg-12" >
                    <img src={error} className="img-fluid"/>
                    
                </div>   
        </div>
        </div>

    </div>

    );
  }
  
  export default Error404;