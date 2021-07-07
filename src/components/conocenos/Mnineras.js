import './Modales.css';
import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Link,
  NavLink,
  withRouter
} from "react-router-dom";



function Mnineras () {
	const redirect= () => {
		window.location.replace("Proyecto_react_wuagua/nineras")
	}
    return (
        <div className="modal" tabIndex={-1} id="nineras">
			  <div className="modal-dialog modal-dialog-centered modal-fullscreen">
			    <div className="modal-content">
			      <div className="modal-header">
			        </div>
				      <div className="modal-body">
				      	<div className="container-fluid">
				      		<div className="row">
				      			<div className="col-sm-12 col-md-12 col-lg-12 funcionamos">
				      				<h2> ¿Nuestras niñeras?</h2>
				      				<p>En <span className="wuagua">Wuagua</span> contamos con personal calificado, en actualización permanente, idóneo para la prestación de los servicios.<br></br><br></br>
				      				Nuestro personal cuenta con certificado de atención a la primera infancia.<br></br><br></br>
				      				Todas nuestras niñeras son seleccionadas cuidadosamente. Deben cumplir con los parámetros de selección y cuentan con cualidades como paciencia, respeto, honestidad, puntualidad, trato adecuado y cariñoso con los niños, proactivas.<br></br>
				      				Nuestras niñeras cuentan con experiencia verificable.<br></br><br></br>
				      				Contamos con verificación de seguridad para la tranquilidad de los padres. </p> 
				      			</div>
				      		</div> 
						</div>
				      </div>
			      	<div className="modal-footer">
			        <button type="button" className="btn btn-secondary2" data-bs-dismiss="modal">Close</button>
					<div>
						<button type="button" className="btn btn-secondary2" onClick={redirect} >Conoce las niñeras</button>
					</div>
				  </div>
			    </div>
			  </div>
			</div>
    );
  }
  
  export default Mnineras;
  