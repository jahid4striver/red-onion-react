import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Lunch from '../Lunch/Lunch';

const Lunchs = () => {
    const [lunchs, setLunchs] = useState([]);
    useEffect(() => {
        fetch('lunch.json')
            .then(res => res.json())
            .then(data => setLunchs(data));
    }, [])

    return (
        <div className='container'>
            <div className='row text-center'>
            {
                lunchs.map(lunch =><Lunch
                    key={lunch.id}
                    lunch={lunch}
                />)
            }
            </div>
        </div>
    );
};

export default Lunchs;