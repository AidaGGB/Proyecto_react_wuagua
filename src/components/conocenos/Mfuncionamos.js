import './Modales.css';


function Mfuncionamos () {
    return (
        <div className="modal" tabindex={-1} id="funcionamos">
			  <div className="modal-dialog modal-dialog-centered modal-fullscreen">
			    <div className="modal-content">
			      <div className="modal-header">
			        </div>
				      <div className="modal-body">
				      	<div className="container-fluid">
				      		<div className="row">
				      			<div className="col-sm-12 col-md-12 col-lg-12 funcionamos">
				      				<h2> ¿Como funcionamos?</h2><br></br>
				      				<p>Nuestra plataforma <span className="wuagua">Wuagua</span> esta orientada para que encuentres los que buscas: </p> 
				      					<ul>   
				      						<li><i className="fas fa-baby"></i>  Prestamos servicio básico de cuidado temporal de niños, por horas. Desde 3 horas en adelante.</li><br></br>
				      						<li><i className="fas fa-child"></i>  Prestamos servicio básico de cuidado permanente.  Medio tiempo o tiempo completo según su necesidad.</li><br></br>
				      						<li>Adicional si la persona lo requiere prestamos servicio de:<br></br><br></br>
				      							<ul>
					      							<li><i className="fas fa-paw"></i> Cuidado de mascotas</li>
					      							<li><i className="fas fa-mortar-pestle"></i> Cocina</li>
					      							<li><i className="fas fa-hand-sparkles"></i> Tareas del hogar</li>
					      							<li><i className="fas fa-spell-check"></i> Asesoría de tareas</li>
				      							</ul>
											</li>
				      					</ul><br></br>
				      				<p>Si estas interesado en conocernos debes hacer un registro inicial para acceder.<br></br> <br></br>
				      				Si deseas aplicar a uno de nuestros servicios debes hacer un registro adicional para tener acceso completo a la plataforma.<br></br><br></br>
				      				Si eres niñera y estas interesado en trabajar con nosotros debes diligenciar nuestro formulario para la prestación de servicios.<br></br> <br></br>

				      				Directamente los padres elijen la niñera que quieren contratar y que se ajusta a sus necesidades, y acuerdan con ella la prestación y pago de los servicios.<br></br> <br></br>

				      				Todos los pagos se realizan a través de la plataforma. 
				      				</p>
				      			</div>
				      		</div> 
						</div>
			     	 </div>
			      <div className="modal-footer">
			        <button type="button" className="btn btn-secondary2" data-bs-dismiss="modal">Close</button>
				  </div>
			    </div>
			  </div>
			</div>
    );
  }
  
  export default Mfuncionamos;
  