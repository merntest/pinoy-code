import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import arrowr from '../images/arrowr.png';
import arrowsm from '../images/smallarrow.png';
import '../styles/Cardseccss.css';
import img3 from '../images/firstcard.png';
import secondpagetop from '../images/secondpagetop.png';
import { useEffect } from 'react';

const Cardsecpage = () => {
    useEffect(()=>{
    var crds= document.querySelectorAll('#cdtc');

     var windows = window.innerWidth;
     if (windows <800) {
        for (let i=0;i<crds.length;i++) {
            crds[i].style.width='28rem';
        }
     }
    });
    return (
      <div>
                <p className="bwc" >
Explore last-minute deals to the Philippines for unforgettable adventures, savings, and spontaneous travel experiences in stunning destinations like Manila, Cebu, and Davao. Book now and create cherished memories.
</p>
        <div className="cd">
  
         <div className="fl-lc">
         <Card className='cdt' id='cdtc' style={{ width: '33rem' }}>
      <Card.Img className='img-fr' variant="top" src={img3} />
      <Card.Body>
      
        <Card.Text className='ct-sec'>
         <div>
            <div className='per-sec'>
            <div className='perc'>
                20%
            </div>
            <div className='off-sec'>
              OFF
            </div>
            </div>
            <div className='info-sec'>
                <p className='sen'>London <img src={arrowsm} id='arrow-pl'></img> manila</p>
                <p className='sen2'>Round trip | 13 March -  26th March</p>
              <p className='am'>    $ 1200</p>
              <Button className='btn-sec' variant="primary">Book Now</Button>
         </div>
         </div>
        </Card.Text>
    
      </Card.Body>
    </Card>
         </div>
         <div className="fl-lc">
         <Card className='cdt' id='cdtc' style={{ width: '33rem' }}>
      <Card.Img className='img-fr' variant="top" src={secondpagetop} />
      <Card.Body>
      
        <Card.Text className='ct-sec'>
         <div>
            <div className='per-sec'>
            <div className='perc'>
                20%
            </div>
            <div className='off-sec'>
              OFF
            </div>
            </div>
            <div className='info-sec'>
                <p className='sen'>London <img src={arrowsm} id='arrow-pl'></img> manila</p>
                <p className='sen2'>Round trip | 13 March -  26th March</p>
              <p className='am'>    $ 1200</p>
              <Button className='btn-sec' variant="primary">Book Now</Button>
         </div>
         </div>
        </Card.Text>
    
      </Card.Body>
    </Card>
         </div>
        </div>
        </div>
    )
}

export default Cardsecpage;