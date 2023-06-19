import '../App.css';

import Navbar2 from '../compnonents/Navbarreal';
import Banner from '../compnonents/Banner';
import Form from '../compnonents/Formnew';
import Services from '../compnonents/Services';
import Trips from '../compnonents/Trips';
import Destinations from '../compnonents/Destinations';
import Cardsecpage from '../compnonents/Cardsecpage';
import Cardsecondpage from '../compnonents/Cardsecondpage';
import Footer from '../compnonents/Footer';
import Email from '../compnonents/Email';

const Home = () => {
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
     
    </div>
)
}
export default Home;