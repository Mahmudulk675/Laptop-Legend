

import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'



const AddAdmin = () => {

    const [adminName, setAdminName] = useState('');
    const [email, setEmail] = useState('');
 
    console.log(adminName,email);
 
    const onSubmit = () => {
         const adminData = {
             name: adminName,
            //  price: price,
             email: email,
            //  imgUrl: imgUrl
         }
         const url = 'http://localhost:5050/dashboard/addAdmin'
         console.log('dgdfgdfg',adminData );
 
         fetch(url, {
             method: 'POST',
             headers: {
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(adminData)
         })
         .then(res => console.log('response', res))
    }
   

    return (
        <div>
        <Form className="mt-5 row"  >
          {/* <div className="col-md-6"> */}
          <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Email address</Form.Label> */}
           <Form.Control type="text" placeholder=" Name" onBlur={(event) => setAdminName(event.target.value)} required/>
           <Form.Text className="text-muted">
           </Form.Text>
         </Form.Group>
         <br/><br/>
       
          {/* <div className="col-md-6"> */}

          <Form.Group controlId="formBasicEmail">
           <Form.Control type="text" placeholder="email" onBlur={(event) => setEmail(event.target.value)}/>
           <Form.Text className="text-muted">
           </Form.Text>
         </Form.Group>
       <br/><br/>
       
         <Button variant="primary" type="button" onClick={()=> onSubmit()}>
           Submit
         </Button>
       </Form>
               </div>
    );
};

export default AddAdmin;