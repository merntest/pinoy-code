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
 <Carousel>
      <Carousel.Item>
      <div className='card-set'>
      <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={april} className='agent-img' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={haidie} className='agent-img' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={idk} className='agent-img' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card className='card-agent' style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rhea} className='agent-img' />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    
      </div>
      </Carousel.Item>
    </Carousel>
    <p className='texp'> Why to Book with Call Center</p>
    <p className='textp2'>Discover the beauty of pillipines</p>
    <div className='sr'>
        
    </div>

    </div>
)
}
export default Footer;