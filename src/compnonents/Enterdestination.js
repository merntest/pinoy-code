import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

import Row from 'react-bootstrap/Row';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const Enterdestination = () => {

    const [txtname,setName] = useState('');
    const [txtprice,setprice] = useState('');
    const [fileimage, setimage] = useState('');

    const uploadproduct= async() =>{
        console.log(fileimage)
        const formData = new FormData();
        formData.append('name',txtname);
        formData.append('price',txtprice);
        formData.append('image',fileimage);

        // const response = await axios.post("http://127.0.0.1:8000/api/destinations",formData,{
        //     headers:{'Content-Type':"multipart/form-data"},
        // });

        // if(response) {
        //     console.log(response.data);
        // }
    }

    const handlesubmit = async(e) => {
        e.preventDefault();
        await uploadproduct();
    }
    return (
        <div>

<Form onSubmit={handlesubmit}>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
         enter Destinations
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="text" onChange={(e)=>setName(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" >
        <Form.Label column sm="2">
         enter price
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="text"  onChange={(e)=>setprice(e.target.value)}/>
        </Col>
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Default file input example</Form.Label>
        <Form.Control type="file"  onChange={(e)=>setimage(e.target.files[0])}/>
      </Form.Group>
      <Button type='submit' variant="primary">submit</Button>
    </Form>
        </div>
    )
}
export default Enterdestination;