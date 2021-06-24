import './Conocenos.css';


function Conocenos (props) {
    return (
    	    <div className="cajac">
				<img src={props.imgcon} className="img-fluid"/><br></br><br></br>
				<div>
					<a href="" className="elegirnos" data-bs-toggle="modal" data-bs-target="#elegirnos">{props.titcon}</a>
				</div>
			</div>
	    
    );
  }
  
  export default Conocenos;
  