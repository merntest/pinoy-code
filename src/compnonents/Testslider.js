import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
const Testslider = () =>{
return (
    <Carousel>
    <Carousel.Item>
    <Button  variant="primary">Book Now</Button>
    <Button  variant="primary">Book Now</Button>
    <Button  variant="primary">Book Now</Button>
    </Carousel.Item>
    <Carousel.Item>
    <Button  variant="primary">Book Now</Button>
    </Carousel.Item>
    <Carousel.Item>
    <Button  variant="primary">Book Now</Button>
    </Carousel.Item>
  </Carousel>
)
}
export default Testslider;