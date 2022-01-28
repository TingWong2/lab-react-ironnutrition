import React, { useState } from 'react';

const Form = ({ addDish }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [calory, setCalory] = useState(0);
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const dish = { name: name, calories: calory, image: image  };
    addDish(dish);
    setImage('');
    setName('');
    setCalory(0);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="image">Image</label>
      <input class="input is-normal"
        type="text"
        name="image"
        id="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <label htmlFor="name">Name</label>
      <input class="input is-normal"
        type="text"
        name="name"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="colory">Calories</label>
      <input class="input is-normal"
        type="number"
        name="calory"
        id="calory"
        value={calory}
        onChange={(e) => setCalory(e.target.value)}
      />

      <button class="button is-primary is-rounded"> Submit </button>
    </form>
  );
};



export default Form;