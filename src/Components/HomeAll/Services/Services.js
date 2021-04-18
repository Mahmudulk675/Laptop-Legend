import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import { Spinner } from 'react-bootstrap';

// const services = [
//     {
//         name: 'Regular CheckUp',
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis alias maiores quia dolorem quod rem.`,
//         img: "https://p.kindpng.com/picc/s/46-465726_woman-working-with-a-laptop-clip-arts-person.png",
//         price: 2000
//     },
//     {
//         name: 'Regular CheckUp',
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis alias maiores quia dolorem quod rem.`,
//         img: "https://p.kindpng.com/picc/s/46-465726_woman-working-with-a-laptop-clip-arts-person.png",
//         price: 2000
//     },
//     {
//         name: 'Regular CheckUp',
//         description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis alias maiores quia dolorem quod rem.`,
//         img: "https://p.kindpng.com/picc/s/46-465726_woman-working-with-a-laptop-clip-arts-person.png",
//         price: 2000
//     }
// ]




const Services = () => {
    const [services, setServices] = useState([]);
    const [spinner, setSpinner] = useState(true);

    useEffect(() => {
        fetch('https://boiling-brushlands-55118.herokuapp.com/services')
        .then(response => response.json())
        .then(data => {setServices(data)
            setSpinner(false);
        })
        
    },[])

    return (
        <section className="services-container mt-5">
            <div className="text-center">
                <h3 style={{color: '#1CC7C1'}}>OUR SERVICES</h3>
            </div>

            {spinner ? 
              <div className="spinner">
                  <Spinner animation="border" variant="warning" /> 
              </div>
            :
              <div className="d-flex justify-content-center">
              <div className="row w-75 row mt-5 ">
              {
                  services.map(service => <ServiceCard service={service} key={service._id}></ServiceCard>)
              }
            </div>
            </div>
            }
   
          
        </section>
    );
};

export default Services;