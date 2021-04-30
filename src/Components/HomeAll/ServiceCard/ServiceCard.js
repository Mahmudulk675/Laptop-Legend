import React from 'react';
import { useHistory } from 'react-router';

const ServiceCard = (props) => {
    const {_id,name,imgUrl,description,price} = props.service;

    const history = useHistory();

    const handleOrderClick = () => {
        history.push(`/order/${_id}`);
    }
    return (
        <div className="col-md-4 text-center service-card" >
            <div class="card " style={{width: '18rem'}}>
                <img src={imgUrl} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{name}</h5>
                        <h6>Cost: ${price}</h6>
                        <p class="card-text">{description}</p>
                        <button onClick={handleOrderClick} className="btn btn-warning">Get Service</button>
                  </div>
             </div>
          </div>
    );
};

export default ServiceCard;