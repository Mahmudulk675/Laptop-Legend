import React from 'react';
import repair from '../../../Images/repair.jpg'

const OurDetail = () => {
    return (
        <section className="our-detail pb-0 pb-md-5 my-5">
        <div className="container mb-5">
            <div className="row mb-5">
                <div className="col-md-5 mb-4 m-md-0">
                    <img className="img-fluid" src={repair} alt=""/>
                </div>
                <div className="col-md-7 align-self-center">
                    <h1>Repair Your Computer in Expart's Hand</h1><br/>
                    <button className="btn btn-warning">Learn More</button>
                    <p className="text-secondary my-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio.  tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, .
                    </p>
                    
                </div>
            </div>
        </div>
    </section>
    );
};

export default OurDetail;