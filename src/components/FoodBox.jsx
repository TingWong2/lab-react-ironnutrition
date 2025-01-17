import React, { useState } from 'react';

const FoodBox = (props) => {
  const { food, callbackFood } = props;
  const [quantity, setQuantity] = useState(1);
  const addToMenu = () => {
    console.log('adding to menu...');
    const foodToSend = { ...food, quantity };
  };
  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={food.image} />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{food.name}</strong> <br />
              <small>{food.calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                className="input"
                type="number"
                value="1"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={addToMenu}>
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};
export default FoodBox;
