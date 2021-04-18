
import React, { useContext, useState } from 'react';
import { Form ,Button} from 'react-bootstrap';
import { UserContext } from '../../../App';

const Review = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [customerName, setCustomerName] = useState('');
    const [company, setCompany] = useState();
    const [description, setDescription] = useState('');
 
 
    console.log(company,customerName,description);
 
    const onSubmit = () => {
         const reviewData = {
            ...loggedInUser,
             name: customerName,
             company: company,
             description: description,
             
         }
         const url = 'https://boiling-brushlands-55118.herokuapp.com/dashboard/review'
         console.log('reviews',reviewData );
 
         fetch(url, {
             method: 'POST',
             headers: {
                 'Content-Type':'application/json'
             },
             body: JSON.stringify(reviewData)
         })
         .then(res => console.log('response', res))
    }
    
    return (
        <div>
            
        <Form className="mt-5 row"  >
          <div  className="col-md-8">
          <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Email address</Form.Label> */}
           <Form.Control type="text" placeholder="Your Name" onBlur={(event) => setCustomerName(event.target.value)} required/>
           <Form.Text className="text-muted">
           </Form.Text>
         </Form.Group> <br/>
       
         <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Password</Form.Label> */}
           <Form.Control type="text" placeholder="Company's Name" onBlur={(event) => setCompany(event.target.value)}/>
         </Form.Group><br/>
          </div>
       
          <div >
          <Form.Group controlId="formBasicEmail">
           {/* <Form.Label>Email address</Form.Label> */}
           <Form.Control style={{height:"200px"}} type="text" placeholder="Review Us" onBlur={(event) => setDescription(event.target.value)}/>
           <Form.Text className="text-muted"> 
           </Form.Text>
         </Form.Group>
       
         {/* <Form.Group>
            <FontAwesomeIcon icon={faUpload} /> <Form.File id="exampleFormControlFile1" label="Add Photo"  onChange={handleImgUpload}/>
         </Form.Group>    */}
       
          </div>
       </Form>
       <br/>
         <div className="d-flex justify-content-end">
         <Button variant="primary" type="button" onClick={()=> onSubmit()}>
           Submit
         </Button>
         </div>
               </div>
    );
};

export default Review;