import './Login.css';
import logo from './logotipo2.png';
import home from './home.png';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function Login () {
    return (
        
            <div className="container-fluid container2">
		        <div className="padres row mb-2">
			        <div className="logo2 col-sm-12 col-md-12 col-lg-11">

				        <img src={logo}/>
				        <h5 className="tituloquien">Por ti y para tus hijos SIEMPRE.</h5>
			        </div>							
			        <div className="home col-sm-12 col-md-12 col-lg-1">
                        <Link to="/home"><img src={home} width="50px"/></Link>
                        
			        </div>
		        </div>

		        <div className="row">
			        <div className="card col-sm-12 col-md-12 col-lg-12">
                        <div className="card-body">
                            <form id="ingreso">
                                <div>
                                    <img src={logo}/>
                                    <h5>Por ti y para tus hijos SIEMPRE.</h5>
                                </div>
                                <div>
                                    <div id="campoUsuario">
                                        <input type="text" id="usuario" className="form-control" name="nombrecito" size="50" maxlength="50" required="required" placeholder=" Usuario"/>
                                        <div className="feedback"></div>
                                    </div>

                                    <div id="campoContrasena">
                                        <input type="password" id="contrasena" className="form-control" name="passwordcito" size="80" maxlength="80" required="required" placeholder="Contraseña"/>
                                        <div className="feedback"></div>
                                    </div>

                                    <div className="d-grid gap-2"><input type="submit" value="Ingresar" className="btn btn-primary"/></div><br></br>

                                    <div><a href="recordarc">¿Olvidaste tu contraseña?</a></div><br></br>
                                    
                                    <h4 className="ncuenta"> ¿No tienes cuenta?</h4><a href="registro.html">Regístrate</a>
                                </div>
                            </form>
                        </div>
                    </div>
				</div>
			</div>
        
    
    );
  }
  
  export default Login;