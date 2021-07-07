import './Slider.css';
import carrusel1 from './carrusel1.jpeg';
import carrusel2 from './carrusel2.jpeg';
import carrusel3 from './carrusel3.jpeg';



function Slider () {
    return (
      <div>
        <section className="carrusel">
			<div>
				<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
					<div className="carousel-indicators">
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
						<button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
					</div>
					<div className="carousel-inner">
						<div className="carousel-item active">
							<img src={carrusel1} className="d-block w-100" alt="..."/>
						</div>
						<div className="carousel-item">
							<img src={carrusel3} className="d-block w-100" alt="..."/>
						</div>
						<div className="carousel-item">
							<img src={carrusel2} className="d-block w-100" alt="..."/>
						</div>
					</div>
					<button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
						<span className="carousel-control-prev-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Previous</span>
					</button>
					<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
						<span className="carousel-control-next-icon" aria-hidden="true"></span>
						<span className="visually-hidden">Next</span>
					</button>
				</div>
			</div>	
</section>		
        
      </div>
    );
  }
  
  export default Slider;
  