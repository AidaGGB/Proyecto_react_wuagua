import './Header.css';
import lupa from './lupa.png';
import usuario from './usuario.png';
import logotipo2 from './logotipo2.png';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";


function Header () {
    return (
      <div>
        <div class="container-fluid overflow-hidden">
		    <div class="row">
			    <nav>
                    <div class="buscareinicio row">
                        <div class="buscar col-sm-12 col-lg-12">
                            <img src={lupa}/>
                            <Link to="/formulario"><img src={usuario}/></Link>
                        </div>		
                    </div>

                    <div class="logo">
                        <div><img src={logotipo2} className="img-fluid"/></div>
                        <div><h5>Por ti y para tus hijos SIEMPRE.</h5></div>
                    </div>
				
                    <div class="botonesprincipal">
                        <div class="container-fluid">
                        <ul class="row">
                            <li class="col-lg-3"><a href="#" role="button" class="btn btn-secondary">Inicio</a></li>
                            <li class="col-lg-3"><a data-bs-toggle="collapse" href="#submenu" aria-expanded="false" aria-controls="submenu" role="button" class="btn btn-secondary ">¿Buscas niñera?</a>
                                <div class="collapse" id="submenu">
                                        <NavLink to="/nineras" role="button" class="btn btn-danger">Conoce las niñeras</NavLink>
                                </div>
                            </li>
                            <li class="col-sm-12 col-lg-3"><a data-bs-toggle="collapse" href="#submenu" aria-expanded="false" aria-controls="submenu" role="button" class="btn btn-secondary">¿Eres niñera?</a>
                                <div class="collapse" id="submenu">
                                        <a href="ingreso.html" role="button" class="btn btn-danger">Ingresar</a>
                                        <a href="conocepapas.html" role="button" class="btn btn-danger">Conoce los papás</a>
                                </div>
                            </li>
                            <li class="col-sm-12 col-lg-3"><a href="hablemos.html" role="button" class="btn btn-secondary ">¡Hablemos!</a></li>
                        </ul>
                        </div>
                    </div>
			    </nav>
            </div>
        </div>
      </div>
    );
  }
  
  export default Header;