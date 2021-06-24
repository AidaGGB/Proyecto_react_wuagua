import './Propperfil.css';
import ninera1 from './nineraperfil.jpeg';
import ninera2 from './nineraperfil2.jpg';
import ninera3 from './nineraperfil3.jpg';
import ninera4 from './nineraperfil4.jpg';
import Perfil from '../../components/perfil/Perfil';
import logo from './logotipo2.png';
import home from './home.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const perfil=[
    {
        id:1,
        img:ninera1,
        title:'Laura Marcela Garcia Paba',
        p:'Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.',
        link:'Ver perfil completo',
    },
    {
        id:2,
        img:ninera2,
        title:'Diana Viviana Garcia Ortega',
        p:'Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.',
        link:'Ver perfil completo',
    },
    {
        id:3,
        img:ninera3,
        title:'Laura Yaneth Vargas Torres',
        p:'Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.',
        link:'Ver perfil completo',
    },

    {
        id:4,
        img:ninera4,
        title:'Ingrid Tatiana Paba Guillen',
        p:'Profesional en atención a la primera infancia, con 10 años de experiencia en el cuidado de niños, dinámica, responsable y con capacidad de adaptación.',
        link:'Ver perfil completo',

    }
]

function Propperfil () {
    return (
    
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
                {
                    perfil.map(perfil=>(
					<div className="col-lg-6 " key={perfil.id}>
						 <Perfil imgperf={perfil.img} titperf={perfil.title} pperf={perfil.p} linkperf={perfil.link}/>
					</div>
                ))
                }
            </div>
        </div>
    );
  }
  
  export default Propperfil;
  

