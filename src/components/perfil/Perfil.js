import './Perfil.css';
import logo from './logotipo2.png';
import home from './home.png';
import ninera from './nineraperfil.jpeg';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Perfil () {
    return (
    <div>
        <div className="container-fluid container8 min-vh-100">

            <div className="padres row mb-2">
                <div className="logo2 col-sm-12 col-md-11 col-lg-11">

                    <img src={logo}/>

                    <h5 className="tituloquien">Por ti y para tus hijos SIEMPRE.</h5>
                </div>							
                <div className="home col-sm-12 col-md-1 col-lg-1">
                <Link to="/home"><img src={home} width="50px"/></Link>
                </div>
            </div>

            <div className="padres row mb-2">
                <div className="card3 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={ninera} className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Laura Marcela Garcia Paba</h5>
                                <p className="card-text" max-lenght="10">Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.</p>
                                <a href="perfilninera.html">Ver perfil completo</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card3 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={ninera} className='img-fluid'/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">Laura Marcela Garcia Paba</h5>
                                <p className="card-text">Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.</p>
                                <a href="perfilninera.html">Ver perfil completo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="padres row mb-2">
                <div className="card3 mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ninera} className='img-fluid'/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Laura Marcela Garcia Paba</h5>
                            <p className="card-text">Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.</p>
                             <a href="perfilninera.html">Ver perfil completo</a>
                        </div>
                    </div>
                </div>
                </div>

                <div className="card3 mb-3" >
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={ninera} className='img-fluid'/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Laura Marcela Garcia Paba</h5>
                            <p className="card-text">Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.</p>
                            <a href="perfilninera.html">Ver perfil completo</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
                        
        </div>
        
    </div>
    );
  }
  
  export default Perfil;