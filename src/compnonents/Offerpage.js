import Navbar2 from '../compnonents/Navbarreal';
import Banner from '../compnonents/Banner';
import Form from '../compnonents/Formnew';

import Footer from '../compnonents/Footer';
import Email from '../compnonents/Email';
import Cardsecpage from '../compnonents/Cardsecpage';
import Cardsecondpage from '../compnonents/Cardsecondpage';
const Offerpage = () =>{
return (
    <div className='App'>
     <Navbar2/>
      <Banner/>
      <Form/>
    
      <Cardsecpage/>
      <Cardsecondpage/>
 
      {/* <Callus/> */}
      <Footer/>
      <Email/>
 
    </div>
)
}
export default Offerpage;