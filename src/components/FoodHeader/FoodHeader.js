import React from 'react';
import { Link } from 'react-router-dom';

const FoodHeader = () => {
    return (
        <div className='text-center mt-3 mb-5'>
            <Link className='text-decoration-none text-dark ms-3' to='/breakfasts'>Breakfast</Link>
            <Link className='text-decoration-none text-dark ms-3' to='/lunchs'>Lunch</Link>
            <Link className='text-decoration-none text-dark ms-3' to='/dinners'>Dinner</Link>
        </div>
    );
};

export default FoodHeader;