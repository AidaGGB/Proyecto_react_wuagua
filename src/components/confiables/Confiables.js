import './Confiables.css';


function Confiables (props) {
    return (
        <div>
			<img src={props.imgconf} className="img-fluid"/><br></br><br></br>
			<div>
				<a  className="segur" href="seguridad.html">{props.titconf}</a>
			</div>

		</div>
    
    );
  }
  
  export default Confiables;
  