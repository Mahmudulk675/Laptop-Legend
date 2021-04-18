import React from 'react';

const ReviewCard = (props) => {
    const {description,name,company ,customerPhotoURL} = props.review;
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-body">
            <div className="d-flex justify-content-center">
            <img className="mx-3" src={customerPhotoURL} alt="" width="60"/>
            </div>
                <p className="card-text text-center">{description}</p>
            </div>
            <div className="card-footer d-flex  align-items-center">
                
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{company}</p>
                </div>
            </div>
       </div>
    );
};

export default ReviewCard;