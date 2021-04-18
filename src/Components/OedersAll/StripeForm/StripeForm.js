// import React, { useMemo, useState } from "react";
// import {
//   useStripe,
//   useElements,
//   CardNumberElement,
//   CardCvcElement,
//   CardExpiryElement
// } from "@stripe/react-stripe-js";
// import './StripeForm.css'

// // import useResponsiveFontSize from "../../useResponsiveFontSize";

// const useOptions = () => {
//   const fontSize = '16px'
//   const options = useMemo(
//     () => ({
//       style: {
//         base: {
//           fontSize,
//           color: "#424770",
//           letterSpacing: "0.025em",
//           fontFamily: "Source Code Pro, monospace",
//           "::placeholder": {
//             color: "#aab7c4"
//           }
//         },
//         invalid: {
//           color: "#9e2146"
//         }
//       }
//     }),
//     []
//   );

//   return options;
// };

// const SplitForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const options = useOptions();

//   const [paymentError, setPaymentError]= useState(null)

//   const handleSubmit = async event => {
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     const payload = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardNumberElement)
//     });
//     console.log("[PaymentMethod]", payload);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Card number
//         <CardNumberElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label><br/>
//       <label>
//         Expiration date
//         <CardExpiryElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label><br/>
//       <label>
//         CVC
//         <CardCvcElement
//           options={options}
//           onReady={() => {
//             console.log("CardNumberElement [ready]");
//           }}
//           onChange={event => {
//             console.log("CardNumberElement [change]", event);
//           }}
//           onBlur={() => {
//             console.log("CardNumberElement [blur]");
//           }}
//           onFocus={() => {
//             console.log("CardNumberElement [focus]");
//           }}
//         />
//       </label><br/>
//       <button type="submit" disabled={!stripe}>
//         Pay
//       </button>
//     </form>
//   );
// };

// export default SplitForm;





import React, { useState } from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

const StripeForm = ({handlePayment}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {

      return;
    }


    const cardElement = elements.getElement(CardElement);

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message)
      setPaymentSuccess(null);
    } else {
      setPaymentSuccess(paymentMethod.id);
      setPaymentError(null);
      handlePayment(paymentMethod.id)
    }
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </form>
    {
        paymentError && <p style={{color: 'red'}}>{paymentError}</p>
    }
    {
        paymentSuccess && <p style={{color: 'green'}}>Payment Successful</p>
    }
    </div>
  );
};

export default StripeForm;
