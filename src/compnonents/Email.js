import '../styles/Emailcss.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useEffect } from 'react';

const Email = () => {
    useEffect(()=>{
      var windows = window.innerWidth;
      console.log(windows);

      if (windows<1000) {
        document.getElementById('env').style.width='20';
        document.getElementById('env').style.height='20';
      }
    });
return (
    <div>
        
        <div className='inem'>
        <p className='sent'>Like travel deals? Enter your email and we'll them your way.</p>
        <div className='mgrl'>
         
           
        {/* <Form.Control size="lg" type="text" className='emcn' placeholder="	   Get cheap air emails " 
        /> */}
         <Form className='bn'>
     

      <Form.Group as={Row} className="mb-1" controlId="">
        <Form.Label column sm="1">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#808080" id='env' class="bi bi-envelope-fill" viewBox="0 0 16 16">
  <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
</svg>
        </Form.Label>
        <Col>
          <Form.Control type="text" className='emcn' placeholder="Get cheap air emails" />
        </Col>
      </Form.Group>
    </Form>
      
        <Button variant="primary" className='btsu'>Sign Up</Button>
        <div className='txp'>
            <p>Your privacy is important to us , so we'll never spam you or share your info with third parties . Take a look at our <span className='blun'>privacy policy </span> and we'd be sad to see you go , but you can <span className='blun'> unsubscribe</span> at any time.</p>
        </div>
        </div>
        </div>
    </div>
)
}

export default Email;