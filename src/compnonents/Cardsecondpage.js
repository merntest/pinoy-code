import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from '../images/firstcard.png';
import arrowr from '../images/arrowr.png';
import '../styles/Cardsecondcss.css';
const Cardsecondpage = () => {
    
return (
  <div>
<div className='seccard'>
<Card  className='cp' id='cp2id'  style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
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
    <Card  className='cp' id='cp2id'  style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
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
    <Card  className='cp'  id='cp2id'  style={{ width: '22rem' }}>
      <Card.Img variant="top" src={img3} className='img-br2'  />
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
<div className='pdg'>
    <p className='subinc'>* All fares above were last found on . Apr 30 , 2023 at 2:25 PM . Fares are one way or round trip as indicated above. Fares incl. all fuel surchages .<span className='un'>taxes & fees</span> and our <span className='un'> services fees.</span> Displayed fares are based on historical data , are subject to change and cannot be guaranteed at the time of booking.<span className='un'>See all booking terms and conditions .</span>  Ref: tW3JFNLIEUSBYUq3Fq7cjw</p>
    </div>
</div>
)
}
export default Cardsecondpage;