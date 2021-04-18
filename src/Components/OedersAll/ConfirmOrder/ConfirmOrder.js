// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import { UserContext } from '../../../App';
// import StripePayment from '../StripePayment/StripePayment';

// const ConfirmOrder = () => {

//     const [loggedInUser,setLoggedInUser] = useContext(UserContext);
//     const [shippingData, setShippingData] = useState(null)


//     const {id} = useParams();
//     console.log(id);
//     const [singleService, setSingleService] =useState({})

//     useEffect(() => {
//         fetch(`https://boiling-brushlands-55118.herokuapp.com/order/${id}`)
//         .then(response => response.json())
//         .then(data => setSingleService(data))

//     },[id])
//     console.log(singleService);


//     const handleOrders = () => {
//       const ordersDetail = {
//         ...loggedInUser,
//         ...singleService,
//         orderTime: new Date()
//       }


//       fetch('https://boiling-brushlands-55118.herokuapp.com/order/'+id,{
//         method: 'POST',
//         headers: { 
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(ordersDetail)
//       })
//       .then(response => response.json())
//       .then(data => console.log(data))
//     }

//     return (
//         <div>
//             <div style = {{display: shippingData ? 'none': 'block'}} className="col-md-6">
//         <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
//           <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
//           {errors.name && <span className="error">Name is required</span>}

//           <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
//           {errors.email && <span className="error">Email is required</span>}

//           <input name="address" ref={register({ required: true })} placeholder="Your Address" />
//           {errors.address && <span className="error">Address is required</span>}

//           <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
//           {errors.phone && <span className="error">Phone Number is required</span>}

//           <input type="submit" />
//         </form>
//       </div>
//       <div  style = {{display: shippingData ?'block': 'none'}} className="col-md-6">
//         <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
//       </div>


//             <StripePayment></StripePayment>
//         </div>
//     );
// };

// export default ConfirmOrder;





import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import StripePayment from '../StripePayment/StripePayment';
import './ConfirmOrder.css'

const ConfirmOrder = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    const [shippingData, setShippingData] = useState(null);
    const [singleService, setSingleService] =useState({});
    const [status,setStatus] = useState('')


    const {id} = useParams();
    console.log(id);
 

    const onSubmit = data => {
      setShippingData(data);
      setStatus('pending')
    };


    const handlePaymentSuccess = paymentId => {
      // const service = getDatabaseCart();
      const orderDetails = {
            ...loggedInUser,
            // products: service,
            name: singleService.name,
            productId: singleService._id,
            price: singleService.price,
            description: singleService.description,
            imgUrl: singleService.imgUrl,
            shipment: shippingData,
            status: status,
            paymentId,
            orderTime: new Date() }
  
      fetch(`https://boiling-brushlands-55118.herokuapp.com/order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(orderDetails)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data) {
            // processOrder()
            alert('Successful')
          }
        })
    }
  

    useEffect(() => {
        fetch(`https://boiling-brushlands-55118.herokuapp.com/order/${id}`)
        .then(response => response.json())
        .then(data => setSingleService(data))

    },[id])
    console.log(singleService);


    // const handleOrders = () => {
    //   const ordersDetail = {
    //     ...loggedInUser,
    //     ...singleService,
    //     orderTime: new Date()
    //   }


    //   fetch('https://boiling-brushlands-55118.herokuapp.com/order/'+id,{
    //     method: 'POST',
    //     headers: { 
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(ordersDetail)
    //   })
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // }
    console.log(watch("example"));
    return (
        <div className="container">
          <h3>{singleService.name} </h3>
          <h5>{singleService.price}</h5>
            <div style = {{display: shippingData ? 'none': 'block'}} className="col-md-6">
        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
          <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder="Your Name" />
          {errors.name && <span className="error">Name is required</span>}

          <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder="Your Email" />
          {errors.email && <span className="error">Email is required</span>}

          <input name="address" ref={register({ required: true })} placeholder="Your Address" />
          {errors.address && <span className="error">Address is required</span>}

          <input name="phone" ref={register({ required: true })} placeholder="Your Phone Number" />
          {errors.phone && <span className="error">Phone Number is required</span>}

          <input type="submit" />
        </form>
      </div>
      <div  style = {{display: shippingData ?'block': 'none'}} className="col-md-6">
        <StripePayment handlePayment={handlePaymentSuccess}></StripePayment>
      </div>


            {/* <StripePayment></StripePayment> */}
        </div>
    );
};

export default ConfirmOrder;