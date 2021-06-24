import './Propconocenos.css';
import nino from './ninojugando.jpg';
import hermanos from './hermanos.jpg';
import ninera from './ninera.jpg';
import Conocenos from '../conocenos/Conocenos';


const conocenos=[
    {
        id:1,
        img:nino,
        title:'¿Por qué elegirnos?',
    },
    {
        id:2,
        img:hermanos,
        title:'¿Cómo Funcionamos?',
    },
    {
        id:3,
        img:ninera,
        title:'Nuestras Niñeras',

    }
]

function Propconocenos () {
    return (
        <section className="conocenos">
				<div>
					<h1>¡Conócenos!</h1>
				</div>
				
				<div className="iconosconocenos row" >
				{	
                    conocenos.map(pconocenos=>(
					<div className="col-sm-12 col-lg-4" key={pconocenos.id}>
						<Conocenos imgcon={pconocenos.img} titcon={pconocenos.title}/>
				    </div>

                    ))
                }
                </div>
  		</section>
    );
  }
  
  export default Propconocenos;
  




