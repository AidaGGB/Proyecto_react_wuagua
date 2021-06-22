import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Conocenos from '../../components/conocenos/Conocenos';
import Confiables from '../../components/confiables/Confiables';
import Prefooter from '../../components/prefooter/Prefooter';
import Footer from '../../components/footer/Footer';

function Home () {
    return (
      <div>
        <Header/>
        <Slider/>
        <Conocenos/>
        <Confiables/>
        <Prefooter/>
        <Footer/>
            
      </div>
    );
  }
  
  export default Home;