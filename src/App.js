import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import initialFoods from './foods.json';
import FoodBox from './components/FoodBox';
import { useState } from 'react';
import Form from './components/Form';
import Search from './components/search';
import FoodList from './components/FoodList';

function App() {
  function callbackFood() {}

  const [foods, setFoods] = useState([...initialFoods]);
  const [searchedString, setSearchedString] = useState('');
  const [clicked, setClicked] = useState(false);
  const [addTomenu, setAddTomenu] = useState([]);

  const addDish = (food) => {
    setFoods([...foods, food]);
  };

  let searchedDish = null;

  if (searchedString !== '') {
    searchedDish = foods.filter((food) => {
      return food.name.toLowerCase().includes(searchedString.toLowerCase());
    });
  } else {
    searchedDish = foods;
  }

  return (
    <div className="App">
      <div>
        <h1 onClick={() => setClicked(!clicked)}>Add new food </h1>
      </div>

      {clicked && <Form addDish={addDish} />}

      <h1> Find your dish</h1>
      <div>
        <Search callbackSearch={setSearchedString} />
      </div>

      {searchedDish.map((food, i) => (
        <FoodBox key={food.name} food={food} callbackFood={callbackFood} />
      ))}
      <div>
        <FoodList />
      </div>
    </div>
  );
}

export default App;
