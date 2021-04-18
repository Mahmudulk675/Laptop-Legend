import React from 'react';
import Animation from '../Animation/Animation';
import Carousel from '../Carousel/Carousel';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import OurDetail from '../OurDetail/OurDetail';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Animation></Animation>
            <Carousel></Carousel>
            <Services></Services>
            <OurDetail></OurDetail>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;