import '../styles/formcss.css';
import Form from 'react-bootstrap/Form';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from "react";
const Formnew  = () => 

{
  const [date, setDate] = useState(null);
  const [date2,setDate2] = useState(null);


return (
<div className='first-bg'>
<div className="form-background">
  <div className='icon-sv'>
  {/* <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16" id='icon-icon'>
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
</svg> */}
<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-airplane-fill" viewBox="0 0 16 16" id='icon-icon'>
  <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>

</svg>

  </div>
  <p className='titlep'>Away from home</p>
  <div>
  <Form className='rb'>
      {[ 'radio'].map((type) => (
        <div key={`inline-${type}`} className="mb-3" id='rbset'>
          <Form.Check
            inline
            label="Return"
            name="group1"
            type={type}
            className='rbutton'
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="One way"
            name="group1"
            type={type}
            className='rbutton'
            id={`inline-${type}-2`}
          />
            <Form.Check
            inline
            label="Multi-city"
            name="group1"
            type={type}
            className='rbutton'
            id={`inline-${type}-2`}
          />
            <Form.Check
            inline
            label="Only Direct"
            name="group1"
            type={type}
            className='rbutton'
            id={`inline-${type}-2`}
          />
          
        </div>
      ))}
      <div className='detsform'>
      <div className='pf'>
      <div className='places' id='first'>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='lbl'>Origin</Form.Label>
        <Form.Control type="text" placeholder="Where from?"  className='inplaces' />
       
      </Form.Group>
    
      </div>
      <div className='places' id='liar'>
        <div className='linset'>
        <span className='line'></span>
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16" id='idsvg' >
  <path  fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"  />
</svg>
<span className='line2'></span>
</div>
      </div>
      <div className='places'>
      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label  className='lbl'>Origin</Form.Label>
        <Form.Control type="text" placeholder="Where to?"  className='inplaces'/>
        
       
      </Form.Group>
      </div>
      
      </div>
      <div className='datesform'>
      <Form.Group className="mb-1" controlId="formBasicEmail" id='cal'>
       
        {/* <Form.Control type="text" placeholder="Departure Date "  className='dateor' id='indate'/> */}
        <DatePicker placeholderText="Depature Date" selected={date2}   onChange={(date2) => setDate2(date2)} className='dateor' id='indate' />
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="grey" class="bi bi-calendar" viewBox="0 0 16 16" id='icond'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
       
      </Form.Group>
        <span className='line3'></span>
        <Form.Group className="mb-1" controlId="formBasicEmail" id='cal'>
       
        {/* <Form.Control type="text" placeholder="Return Date"   className='dateor'id='indate'/> */}
        <DatePicker placeholderText="Return Date" selected={date} onChange={(date) => setDate(date)} className='dateor' id='indate' />
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="grey" class="bi bi-calendar" viewBox="0 0 16 16" id='icond'>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
</svg>
       
      </Form.Group>
      </div>
     <div className='passengers'>
     {/* <Form.Control type="text" placeholder=""  className='textp'/> */}
     <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

        <Form.Label className='plabel'>Passengers</Form.Label>
        <div className='passit'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="grey" class="bi bi-person-circle" viewBox="0 0 16 16">
  <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
  <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
</svg>
        <Form.Control type="text" placeholder="1" className='textp'/>
        </div>
      
      </Form.Group>
     </div>
     <div className='bsec'>
     <button className='bd'> Search Flights</button>
     </div>
   
      </div>
      
    </Form>

  </div>

</div>
  
  </div>


);
}
export default Formnew;