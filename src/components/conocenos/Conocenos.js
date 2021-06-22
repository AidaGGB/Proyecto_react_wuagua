import './Conocenos.css';
import nino from './ninojugando.jpg';
import hermanos from './hermanos.jpg';
import ninera from './ninera.jpg';




function Conocenos () {
    return (
      <div>
          <section className="conocenos">
				<div>
					<h1>¡Conócenos!</h1>
				</div>

				
				<div className="iconosconocenos row">
					
					<div className="cajac col-sm-12 col-lg-4">
						<img src={nino} className="img-fluid"/><br></br><br></br>
					  <div>
					   	<a href="" className="elegirnos" data-bs-toggle="modal" data-bs-target="#elegirnos">¿Por qué elegirnos?</a>
					   </div>
				    </div>

				    <div className="cajac col-sm-12 col-lg-4">
					    <img src={hermanos} className="img-fluid"/><br></br><br></br>
					    <div>
					      <a href="" className="elegirnos" data-bs-toggle="modal" data-bs-target="#funcionamos">¿Cómo Funcionamos?</a>
					     </div>
				    </div>

				   <div className="cajac col-sm-12 col-lg-4">
					   <img src={ninera} className="img-fluid"/><br></br><br></br>
					   <div>
					   	<a href="" className="elegirnos" data-bs-toggle="modal" data-bs-target="#nineras">Nuestras Niñeras</a>
					</div>
				   </div>

				</div>
				
			</section>
      </div>
    );
  }
  
  export default Conocenos;
  