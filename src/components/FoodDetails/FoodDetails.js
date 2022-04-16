import React from 'react';
import { useParams } from 'react-router-dom';

const FoodDetails = () => {
    const {foodId}= useParams();
    return (
        <div>
            <h2>This is Food Details No: {foodId}</h2>
        </div>
    );
};

export default FoodDetails;