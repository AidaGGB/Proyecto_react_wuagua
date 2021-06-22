import './Confiables.css';
import proteger from './proteger.png';
import pago from './pago.png';
import conversation from './conversation.png';



function Confiables () {
    return (
      <div>
          <section className="confiables">
				<div>
					<div>
					    <h1>¡Somos Confiables!</h1>
				    </div>
				    <div className="iconosconfiables row">

						<div className="col-sm-12 col-lg-4">
						   <img src={proteger} className="img-fluid"/><br></br><br></br>
						   <div>
						   		<a  className="segur" href="seguridad.html">Seguridad</a>
						   </div>

					    </div>

					    <div className="col-sm-12 col-lg-4">
						    <img src={conversation} className="img-fluid"/><br></br><br></br>
						    <div>
						    	<a className="segur" href="opiniones.html">Lo que opinan de nosotros</a> 
						    </div>
					    </div>

					   <div className="col-sm-12 col-lg-4">
						   <img src={pago} className="img-fluid"/><br></br><br></br>
						   <div>
						   		<a className="segur" href="tarifas.html">Nuestras tarifas</a>
						   </div>
					   </div>

					</div>
				</div>
				
			</section>
      </div>
    );
  }
  
  export default Confiables;
  