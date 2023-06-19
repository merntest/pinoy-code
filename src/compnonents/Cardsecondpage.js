import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img3 from '../images/firstcard.png';
import arrowr from '../images/arrowr.png';
import '../styles/Cardsecondcss.css';
const Cardsecondpage = () => {
    
return (
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
    <Card className='cp'   id='cp2id'  style={{ width: '22rem' }}>
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
    <Card  className='cp'   id='cp2id'  style={{ width: '22rem' }}>
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
)
}
export default Cardsecondpage;