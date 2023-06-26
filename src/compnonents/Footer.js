import '../styles/Footercss.css';
import travelexperts from '../images/Travelexperts.png';
import bookingconf from '../images/bookingconf.png';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import april from '../images/april.png';
import haidie from'../images/haidie.png';
import idk from '../images/idk.png';
import rhea from '../images/rhea.png';
import { useEffect } from 'react';
import cancellation from '../images/cancellation.png';
import pay from '../images/pay.png';
const Footer = () =>{

    useEffect((event)=>{
        // var icons = document.getElementsByClassName('carousel-control-prev-icon');
        // icons.setAttribute('id','icon-id');
    })
    const servicesfooter = [
        {
            id:'1',
            title:'Travel experts',
            tag:'Expert guidance buy our',
            img: travelexperts,
        },
        {
            id:'2',
            title:'booking confirmation',
            tag:'inmediate',
            img: bookingconf,
        },
        {
            id:'3',
            title:'cancellation',
            tag:'24-hour',
            img: bookingconf,
        },
        {
            id:'4',
            title:'Flexible payments',
            tag:'plans',
            img:pay,
        }


    ]
return (
    <div className="ft">
       <div className="num">
       Need assistance? Your "Pinoy Kaibigan" is just a call away at  <span className='num-un'> 1-895-884-0175 </span> , (24 x 7)

    </div>
 <Carousel>
      <Carousel.Item>
      <div className='card-set'>
      <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={april} className='agent-img' />
      <Card.Body>
        <Card.Title className='ct'>April perara</Card.Title>
        <Card.Text className='ctt'>
          Service agent
          <Card.Text className='ctt' >
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
          
        </Card.Text>
          
        </Card.Text>
      
        <Button variant="primary" className='btlf'>Chat Now</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={haidie} className='agent-img' />
      <Card.Body>
      <Card.Title className='ct'>April perara</Card.Title>
        <Card.Text className='ctt'>
          Service agent
          <Card.Text className='ctt' >
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
          
        </Card.Text>
          
        </Card.Text>
      
        <Button variant="primary" className='btlf'>Chat Now</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={idk} className='agent-img' />
      <Card.Body>
      <Card.Title className='ct'>April perara</Card.Title>
        <Card.Text className='ctt'>
          Service agent
          <Card.Text className='ctt' >
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
          
        </Card.Text>
          
        </Card.Text>
      
        <Button variant="primary" className='btlf'>Chat Now</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rhea} className='agent-img' />
      <Card.Body>
      <Card.Title className='ct'>April perara</Card.Title>
        <Card.Text className='ctt'>
          Service agent
          <Card.Text className='ctt' >
        <span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star checked"></span>
<span class="fa fa-star"></span>
<span class="fa fa-star"></span>
          
        </Card.Text>
          
        </Card.Text>
      
        <Button variant="primary" className='btlf'>Chat Now</Button>
      </Card.Body>
    </Card>
    
      </div>
      </Carousel.Item>
    </Carousel>
    <p className='texp'> Why to Book with Call Center</p>
    <p className='textp2'>Discover the beauty of pillipines</p>
    <div className='sr'>
        <div className='it-em'>
          <img className='img-ser' src={travelexperts}></img>
         <div className='tex-ty'>
          <p className='tp-he'>
           expert guidance by our 
          </p>
          <p className='tp-hsp'>
            Travelexperts
          </p>
          </div>
        </div>
        <div className='it-em'>
          <img className='img-ser' src={bookingconf}></img>
         <div className='tex-ty'>
          <p className='tp-he'>
           Immediate
          </p>
          <p className='tp-hsp'>
            Travelexperts
          </p>
          </div>
        </div>
        <div className='it-em'>
          <img className='img-ser' src={cancellation}></img>
         <div className='tex-ty'>
          <p className='tp-he'>
        24-hour
          </p>
          <p className='tp-hsp'>
            cancellation
          </p>
          </div>
        </div>
        <div className='it-em'>
          <img className='img-ser' src={pay}></img>
         <div className='tex-ty'>
          <p className='tp-he'>
           plans
          </p>
          <p className='tp-hsp'>
            Flexible payment
          </p>
          </div>
        </div>
    </div>

    </div>
)
}
export default Footer;