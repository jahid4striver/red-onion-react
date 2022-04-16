import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);
    useEffect(() => {
        fetch('breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data));
    }, [])

    return (
        <div className='container'>
            <div className='row text-center g-5'>
            {
                breakfasts.map(breakfast =><Breakfast
                    key={breakfast.id}
                    breakfast={breakfast}
                />)
            }
            </div>
        </div>
    );
};

export default Breakfasts;