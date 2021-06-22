import './Prefooter.css';
import facebook from './facebook.png';
import instagram from './instagram.png';
import mail from './mail.png';
import pagos from './pagosfinal.png';





function Prefooter () {
    return (
        <div>
            <section className="prefooter">
                <div className="redes row">
                    <div className="col-sm-12 col-lg-4">
                        <h5>Bogotá,</h5>
                        <h5>Colombia.</h5>
                        <a href="https://es-la.facebook.com/" target="_blank"><img src={facebook} className="img-fluid"/></a>
                        <a href="https://www.instagram.com/?hl=es-la" target="_blank"><img src={instagram} className="img-fluid"/></a>
                        <a href="https://www.google.com/intl/es-419/gmail/about/" target="_blank"><img src={mail} className="img-fluid"/></a>
                    </div>
                    

                    <div className="pagos col-sm-12 col-lg-4">
                        <a href="https://colombia.payu.com/" target="_blank"><img src={pagos} className="img-fluid"/></a>	     
                    </div>

                    <div className="politicas col-sm-12 col-lg-4"><br></br>
                        <div>
                            <a href="politicadatos.html">Política de tratamiento de datos y seguridad.</a>
                        </div>

                        <div>
                            <a href="politicauso.html">Política de uso, términos y condiciones.</a>
                        </div><br></br>

                        <div>
                            <a href="creditos.html">Créditos.</a>
                        </div>
                    </div>

                </div>
        
            </section>
      </div>
    );
  }
  
  export default Prefooter;
  