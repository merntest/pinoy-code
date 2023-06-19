import logo from './logo.svg';
import './App.css';
import Navbar2 from './compnonents/Navbarreal';
import Banner from './compnonents/Banner';
import Form from './compnonents/Formnew';
import Services from './compnonents/Services';
import Trips from './compnonents/Trips';
import Destinations from './compnonents/Destinations';
import Callus from './compnonents/Callus';
import Testslider from './compnonents/Testslider';
import Footer from './compnonents/Footer';
import Email from './compnonents/Email';
import Cardsecpage from './compnonents/Cardsecpage';

function App() {
  return (
    <div className="App">
      <Navbar2/>
      <Banner/>
      <Form/>
      <Services/>
      <Trips/>
      <Destinations/>
      {/* <Callus/> */}
      <Footer/>
      <Email/>
      <Cardsecpage/>
    </div>
  );
}

export default App;
