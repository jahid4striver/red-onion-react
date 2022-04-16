import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import FoodContainer from './components/FoodContainer/FoodContainer';
import OurService from './components/OurService/OurService';
import { Routes } from 'react-router-dom';
import FoodDetails from './components/FoodDetails/FoodDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Home></Home>
      <FoodContainer></FoodContainer>
      <OurService></OurService>
    </div>
  );
}

export default App;
