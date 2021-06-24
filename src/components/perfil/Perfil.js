import './Perfil.css';


function Perfil (props) {
    return (
                <div className="card3 mb-3">
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.imgperf} className="img-fluid"/>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{props.titperf}</h5>
                                <p className="card-text" max-lenght="10">{props.pperf}</p>
                                <a href="perfilninera.html">{props.linkperf}</a>
                            </div>
                        </div>
                    </div>
                </div>

                
        
    
    );
  }
  
  export default Perfil;