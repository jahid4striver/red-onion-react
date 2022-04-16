import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Breakfasts from '../Breakfasts/Breakfasts';
import FoodHeader from '../FoodHeader/FoodHeader';

const FoodContainer = () => {
    return (
        <div>
            <FoodHeader></FoodHeader>
            <Routes>
                <Route path='/breakfasts' element={<Breakfasts/>}></Route>
            </Routes>
        </div>
    );
};

export default FoodContainer;