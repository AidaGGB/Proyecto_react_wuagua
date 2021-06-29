import Header from '../../components/header/Header';
import Slider from '../../components/slider/Slider';
import Conocenos from '../../components/conocenos/Conocenos';
import Propconfiables from '../../components/propconfiables/Propconfiables';
import Prefooter from '../../components/prefooter/Prefooter';
import Footer from '../../components/footer/Footer';

function Home () {
    return (
      <div>
        <Header/>
        <Slider/>
        <Conocenos/>
        <Propconfiables/>
        <Prefooter/>
        <Footer/>
      </div>
    );
  }
  
  export default Home;