import React from 'react';
import bannerbackground from '../../images/bannerbackground.png'
import FoodContainer from '../FoodContainer/FoodContainer';

const Home = () => {
    return (
        <div>
            <img className='img-fluid' src={bannerbackground} alt="" />
        <FoodContainer></FoodContainer>


        </div>
    );
};

export default Home;