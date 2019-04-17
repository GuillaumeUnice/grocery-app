import React, { useState } from 'react';
import './grocery-form.css';

import { FormButton } from '../components/grocery-button/grocery-button';

const DEFAULT_STATE = { name: '', quantity: '' }
const GroceryForm = ({ addGroceryItem }) => {
  const [value, setValue] = useState(DEFAULT_STATE);

  const handleSubmit = event => {
    event.preventDefault();
    if (!value || !value.name || !value.quantity) return;
    addGroceryItem(value);
    setValue(DEFAULT_STATE);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add Grocery item"
        onChange={event => {
          setValue({ ...value, name: event.target.value });
        }}
        value={value.name}
      />
      <input
        type="number"
        placeholder="Quantity"
        onChange={event => {
          setValue({ ...value, quantity: event.target.value });
        }}
        value={value.quantity}
      />

      <FormButton
        type="submit"
        clickHandler={handleSubmit}
        buttonText={'ADD'}
      />
    </form>
  );
};
export default GroceryForm;
