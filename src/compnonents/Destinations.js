import  React , {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/Tripcss.css';
import dest1 from '../images/dest1.png';
import dest2 from '../images/dest2.png';
import dest3 from '../images/dest3.png';
import { Button } from 'react-bootstrap';



const Destinations = () =>{
  
return (
<div className='cs'id='Trips'>
        <p className='als' id='alsid'>Popular destinations <button className='btals'> See More</button></p> 
        <p className='dsub' id='dsubid'>Discover the beauty of pillipines</p>
         <Carousel className='dest-cr'>
      <Carousel.Item className='csi' >
        <div className='view' id='v'>
      <div className='first-dest'>
        <img src={dest1}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                    Bacolod
                </div>
                <div  className='but-sm'>
                    <a href='' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>
           
        </div>
        
      </div>
      <div className='second-test'>
      <img className='img-bet' src={dest2}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                    Palawan
                </div>
                <div  className='but-sm'>
                    <a href='#' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>

        </div>

      </div>
      <div className='third-test'>
      <img src={dest3}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                Balacod
                </div>
                <div  className='but-sm'>
                    <a href='' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>
           
        </div>

      </div>
    </div>
      
      </Carousel.Item>
      <Carousel.Item className='csi' >
        <div className='view' id='v'>
      <div className='first-dest'>
        <img src={dest1}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                    Bacolod
                </div>
                <div  className='but-sm'>
                    <a href='' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>
           
        </div>
        
      </div>
      <div className='second-test'>
      <img className='img-bet' src={dest2}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                    Palawan
                </div>
                <div  className='but-sm'>
                    <a href='#' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>

        </div>

      </div>
      <div className='third-test'>
      <img src={dest3}></img>
        <div className='overlay-dest'>
            <div className='things'>
                <div className='title-dest'>
                    Balacod
                </div>
                <div  className='but-sm'>
                    <a href='' className='a-but'>
                    See More
                    </a>
                </div>
                <Button type='submit'  className="btn-primary"   variant="primary">Read Now</Button>
            </div>
           
        </div>

      </div>
    </div>
      
      </Carousel.Item>
      
    </Carousel>

    </div>
)
}

export default Destinations;