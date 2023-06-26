import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Tripcss.css';
import img3 from '../images/firstcard.png';
import arrowr from '../images/arrowr.png';
import firstpagetwo from '../images/firstpagetwo.png';
import firstpagethree from '../images/firstpagethree.png';
import { useEffect } from 'react';
const Trips = () =>{

  useEffect(()=>{
    var crid =document.querySelectorAll('#crid');
    var cpid = document.querySelectorAll('#cpid');
    var windows = window.innerWidth;

    if(windows <800) {
      for (let i=0;i<crid.length;i++) {
        crid[i].style.width='20rem';

      }

      for(let i=0;i<cpid.length;i++) {
        cpid[i].style.width='18em';
      }
    }
  });
return (
    <div className='cs' >
        <p className='als'>Dont miss these Round Trip Fares <button className='btals'> See More</button></p> 
         <Carousel className>
      <Carousel.Item className='csi'>
        <div className='view'>
      <Card className='cr' id='crid' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={img3} className='img-br' />
      <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
      <Card.Body>
        <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut'>
        <Button type='button' className='butbn' variant="primary">Book Now</Button>
        
        
        
        </div>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp' id='cpid' style={{ width: '22rem' }}>
      <Card.Img variant="top" src={firstpagetwo} className='img-br2'  />
      <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button type='button'  className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp'  id='cpid'   style={{ width: '22rem' }}>
      <Card.Img variant="top" src={firstpagethree} className='img-br2'  />
      <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button type='button'  className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
      
      </Carousel.Item>
      
      <Carousel.Item className='csi'>
        <div className='view'>
      <Card className='cr' id='crid' style={{ width: '35rem' }}>
      <Card.Img variant="top" src={img3} className='img-br' />
      <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
      <Card.Body>
        <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
        <div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut'>
        <Button type='button'  className='butbn' variant="primary">Book Now</Button>
        </div>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp'  id='cpid'   style={{ width: '22rem' }}>
      <Card.Img variant="top" src={firstpagetwo} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button type='button'  className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    <Card className='cp'  id='cpid'   style={{ width: '22rem' }}>
      <Card.Img variant="top" src={firstpagethree} className='img-br2'  />
      <Card.Body>
      <Card.Title className='ct'>London <img src={arrowr} id='arrow-pl'></img> manila
        </Card.Title>
        <div className='overlay'>
        <div className='cl'>
       <div className='dis'>
         20%
       </div>
       <div className='off'>
        OFF
       </div>
       </div>
      </div>
        <div className='sibutl'> 
        <Card.Text className='subtext'>
        Round trip | 13 March -  26th March
        </Card.Text>
        <Card.Text className='subtext2'>
      $ 1200
        </Card.Text>
        </div>
        <div className='sibut' id='idbuts'>
        <Button  className='butbn' variant="primary">Book Now</Button>
        </div>
        
      </Card.Body>
    </Card>
    </div>
      
      </Carousel.Item>
      
    </Carousel>
    <p className='subinc'>* All fares above were last found on . Apr 30 , 2023 at 2:25 PM . Fares are one way or round trip as indicated above. Fares incl. all fuel surchages .<span className='un'>taxes & fees</span> and our <span className='un'> services fees.</span> Displayed fares are based on historical data , are subject to change and cannot be guaranteed at the time of booking.<span className='un'>See all booking terms and conditions .</span>  Ref: tW3JFNLIEUSBYUq3Fq7cjw</p>
    </div>
)
}
export default Trips;