import React from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FoodDetails from '../FoodDetails/FoodDetails';
import '../HoverEffect/HoverEffect.css'

const Breakfast = ({breakfast}) => {
    const {id, name, price, description, img}= breakfast;
    const navigate= useNavigate();

    const goToDetails= (id)=>{
        navigate(`/breakfasts/${id}`)
    }

    return (
        <div className='col-12 col-md-6 col-lg-4'>
            <div onClick={()=> goToDetails(id)} title='Click For Details' className='foods'>
            <img className='w-50' src={img} alt="" />
            <h6>{name}</h6>
            <p>{description}</p>
            <h5>{price}</h5>
            </div>
        </div>
    );
};

export default Breakfast;