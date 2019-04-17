import React from 'react';
import './grocery-item.css';

import GroceryButton from '../components/grocery-button/grocery-button';

const GroceryItem = ({ item, deleteItem, toggleItem }) => {
  const handleClick = event => {
    deleteItem(item.id);
  };

  const handleChecked = event => {
    item.isCompleted = !item.isCompleted;
    toggleItem(item);
  };

  return (
    <div className="itemContainer">
      <label className="CheckboxContainer">
        <input
          type="checkbox"
          onChange={handleChecked}
          checked={item.isCompleted ? true : false}
        />
        <span className="Checkmark" />
      </label>
      <span>{item.name}</span>
      <span>{item.quantity}</span>
      <GroceryButton
        type="submit"
        clickHandler={handleClick}
        buttonText={'X'}
      />
    </div>
  );
};
export default GroceryItem;
