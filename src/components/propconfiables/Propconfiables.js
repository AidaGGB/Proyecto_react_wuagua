import './Propconfiables.css';
import proteger from './proteger.png';
import pago from './pago.png';
import conversation from './conversation.png';
import Confiables from '../confiables/Confiables';


const confiables=[
    {
        id:1,
        img:proteger,
        title:'Seguridad',
    },
    {
        id:2,
        img:conversation,
        title:'Lo que opinan de nosotros',
    },
    {
        id:3,
        img:pago,
        title:'Nuestras tarifas',

    }
]

function Propconfiables () {
    return (
      <div>
           <section className="confiables">
				<div>
					<div>
					    <h1>¡Somos Confiables!</h1>
				    </div>
				    <div className="iconosconfiables row">
                    {
                        confiables.map(pconfiables=>(
						<div className="col-sm-12 col-lg-4" key={pconfiables.id}>
						   <Confiables imgconf={pconfiables.img} titconf={pconfiables.title}/>
					    </div>
                    ))
                    }
                    </div>
                </div>
  			</section>
      </div>
    );
  }
  
  export default Propconfiables;
  




