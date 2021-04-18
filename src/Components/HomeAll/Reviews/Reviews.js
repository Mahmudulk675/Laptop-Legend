import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';
import './Reviews.css'



const Reviews = () => {
    const [reviews, setReviews]= useState([]);

    useEffect(() => {
      fetch(`https://boiling-brushlands-55118.herokuapp.com/review`)
      .then(response => response.json())
      .then(data => setReviews(data))
  
  },[])
  console.log(reviews);
    return (
        <section className="testimonials my-5 py-5">
           <div className="container">
               <div className="section-header">
                   <h5 className="text-primary text-uppercase">Our Happy Customers</h5>
                   <h1>What Our Customers <br/> Says </h1>
               </div>
               <div className="card-deck mt-5 row">
                   {
                       reviews.map(review => <ReviewCard review={review}></ReviewCard>)
                   }
                </div>
           </div>
       </section>
    );
};

export default Reviews;