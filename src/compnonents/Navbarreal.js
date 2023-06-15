
import '../styles/Navbarcss.css';
import logowhite from '../images/logowhite.png';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navbarreal = () => {
  return (
    // <Navbar id='bg-nb'>
    //   <Container>
    
    //     <Navbar.Toggle />
    //     <Navbar.Collapse className="justify-content-end">
    //       <Navbar.Text>
    //       <Navbar >
    //     <Container>
    
    //       <Nav className="me-auto" id='navbar-bg'>
    //         <Nav.Link className='navlink' href="#home"><h1 className='linktext'>Flights</h1></Nav.Link>
    //         <Nav.Link  className='navlink' href="#features"><h1 className='linktext'>Offers</h1></Nav.Link>
    //         <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Blog</h1></Nav.Link>
    //         <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Community</h1></Nav.Link>
    //         <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Contact</h1></Nav.Link>
    //         <img src={logowhite} width='70' height='70'/>
    //       </Nav>
    //     </Container>
    //   </Navbar>
    //       </Navbar.Text>
    //     </Navbar.Collapse>
    //   </Container>

    // </Navbar>
       <>
      {[ 'xl'].map((expand) => (
        <Navbar key={expand} bg="light" id='bg-nb' expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">  <img src={logowhite} width='70' height='70' /></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
            className='nav-mob'
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header  closeButton>
               
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav id='navbar-bg' className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link className='navlink' href="#home"><h1 className='linktext'>Flights</h1></Nav.Link>
             <Nav.Link  className='navlink' href="#features"><h1 className='linktext'>Offers</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Blog</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Community</h1></Nav.Link>
            <Nav.Link  className='navlink' href="#pricing"><h1 className='linktext'>Contact</h1></Nav.Link>
           
          
                  
                </Nav>
               
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navbarreal;