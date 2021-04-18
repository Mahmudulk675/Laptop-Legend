import React from 'react';
import {CardElement, Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeForm from '../StripeForm/StripeForm';

const stripePromise = loadStripe('pk_test_51IeJP1KwA1P1iNPATYox5p5yZKlZo8SjByrLrG7k3JMLEIvhNUxCnuXATKauQrIiIILUmvJpRejuKFsFgdveBGKu00ftloAoMO');

const StripePayment = ({handlePayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <StripeForm handlePayment={handlePayment}></StripeForm>
      </Elements>
    );
};

export default StripePayment;