import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Breakfasts from '../Breakfasts/Breakfasts';
import Dinners from '../Dinners/Dinners';
import FoodDetails from '../FoodDetails/FoodDetails';
import FoodHeader from '../FoodHeader/FoodHeader';
import Lunchs from '../Lunchs/Lunchs';

const FoodContainer = () => {
    return (
        <div>
            <FoodHeader></FoodHeader>
            <Routes>
                <Route path='/breakfasts' element={<Breakfasts/>}></Route>
                <Route path='/dinners' element={<Dinners/>}></Route>
                <Route path='/lunchs' element={<Lunchs/>}></Route>
                <Route path='/breakfasts/:foodId' element={<FoodDetails/>}></Route>
            </Routes>
        </div>
    );
};

export default FoodContainer;