import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);
    useEffect(() => {
        fetch('dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data));
    }, [])

    return (
        <div className='container'>
            <div className='row text-center'>
            {
                dinners.map(dinner =><Dinner
                    key={dinner.id}
                    dinner={dinner}
                />)
            }
            </div>
        </div>
    );
};

export default Dinners;