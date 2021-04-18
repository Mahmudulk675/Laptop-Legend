import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'



const AddService = () => {

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
 
    const [imgUrl , setImgUrl] = useState(null);
 
    console.log(price,productName,description);
 
    const onSubmit = () => {
         const itemData = {
             name: productName,
             price: price,
             description: description,
             imgUrl: imgUrl
         }
         const url = 'http://localhost:5050/dashboard/addService'
         console.log('dgdfgdfg',itemData );
 
         fetch(url, {
             method: 'POST',
             headers: {
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(itemData)
         })
         .then(res => console.log('response', res))
    }
   
    const handleImgUpload = event => {
     // console.log(event.target.files[0]);
     const imgData = new FormData();
     imgData.set('key','12f14ca3c3cffac2258fb723b18a8285');
     imgData.append('image', event.target.files[0]);
 
     axios.post('https://api.imgbb.com/1/upload', imgData)
    .then(function (response) {
      setImgUrl(response.data.data.display_url);
    })
    .catch(function (error) {
      console.log('errr',error);
    });
 }

    return (
        <div>
        <Form className="mt-5 row"  >
          <div className="col-md-6">
          <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Email address</Form.Label> */}
           <Form.Control type="text" placeholder="Service Name" onBlur={(event) => setProductName(event.target.value)} required/>
           <Form.Text className="text-muted">
           </Form.Text>
         </Form.Group>
       
         <Form.Group controlId="formBasicNumber">
           {/* <Form.Label>Password</Form.Label> */}
           <Form.Control type="number" placeholder="Price" onBlur={(event) => setPrice(event.target.value)}/>
         </Form.Group>
          </div>
       
          <div className="col-md-6">
          <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Email address</Form.Label> */}
           <Form.Control type="text" placeholder="Description" onBlur={(event) => setDescription(event.target.value)}/>
           <Form.Text className="text-muted">
           </Form.Text>
         </Form.Group>
       
         <Form.Group>
            <FontAwesomeIcon icon={faUpload} /> <Form.File id="exampleFormControlFile1" label="Add Photo"  onChange={handleImgUpload}/>
         </Form.Group>   
       
          </div>
       
         <Button variant="primary" type="button" onClick={()=> onSubmit()}>
           Submit
         </Button>
       </Form>
               </div>
    );
};

export default AddService;