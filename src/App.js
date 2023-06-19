import logo from './logo.svg';
import './App.css';

import { BrowserRouter , Route , Routes} from "react-router-dom";
import Offerpage from './compnonents/Offerpage';
import Home from './compnonents/Home';

function App() {
  return (
    // <div className="App">
    //   <Navbar2/>
    //   <Banner/>
    //   <Form/>
    //   <Services/>
    //   <Trips/>
    //   <Destinations/>
    //   {/* <Callus/> */}
    //   <Footer/>
    //   <Email/>
     
    // </div>
    <BrowserRouter>
    <Routes>
     <Route path='/offerpage' element={<Offerpage/>}/>
     <Route path='/' element={<Home/>}/>
   </Routes>
    </BrowserRouter>
 
  );
}

export default App;
