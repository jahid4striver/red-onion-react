import React from 'react';

const Dinner = ({dinner}) => {
    const {name, price, description, img}= dinner;
    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div>
            <img className='w-50' src={img} alt="" />
            <h6>{name}</h6>
            <p>{description}</p>
            <h5>{price}</h5>
            </div>
        </div>
    );
};

export default Dinner;