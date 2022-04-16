import React from 'react';
import { Link } from 'react-router-dom';

const FoodHeader = () => {
    return (
        <div className='text-center my-3'>
            <Link className='text-decoration-none text-dark ms-3' to='/breakfasts'>Breakfast</Link>
            <Link className='text-decoration-none text-dark ms-3' to='/lunch'>Lunch</Link>
            <Link className='text-decoration-none text-dark ms-3' to='/dinner'>Dinner</Link>
        </div>
    );
};

export default FoodHeader;