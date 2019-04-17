import React, { useState, useEffect } from 'react';

import {
  getGroceryItems,
  removeGroceryItem,
  updateGroceryItem,
  addGroceryItem
} from '../api';
import GroceryItem from '../grocery-item/grocery-item';
import GroceryForm from '../grocery-form/grocery-form';

const GroceryList = () => {
  const [data, setData] = useState([]);
  const refreshGroceryItems = () => {
    getGroceryItems().then(result => {
      setData(result.data);
    });
  };
  useEffect(() => {
    refreshGroceryItems();
  }, []);

  const [deleteId, setDeleteId] = React.useState(null);
  useEffect(() => {
    if (!deleteId) {
      return;
    }
    removeGroceryItem(deleteId).then(() => {
      refreshGroceryItems();
    });
  }, [deleteId]);

  const [updateItem, setUpdateItem] = React.useState({
    id: null,
    quantity: null,
    name: ''
  });
  useEffect(() => {
    if (
      !updateItem ||
      !updateItem.id ||
      !updateItem.name ||
      !updateItem.quantity
    ) {
      return;
    }

    updateGroceryItem(updateItem).then(() => {
      refreshGroceryItems();
    });
  }, [updateItem]);

  const [addItem, setAddItem] = React.useState(null);
  useEffect(() => {
    if (!addItem) {
      return;
    }

    addGroceryItem(addItem).then(() => {
      refreshGroceryItems();
    });
  }, [addItem]);

  return (
    <div>
      <GroceryForm addGroceryItem={addItem => setAddItem(addItem)} />
      {data &&
        data.map((groceryItem, index) => (
          <GroceryItem
            key={index.toString()}
            item={groceryItem}
            deleteItem={deleteId => setDeleteId(deleteId)}
            toggleItem={updateItem => setUpdateItem(updateItem)}
          />
        ))}
      <footer>Total Item: {data.length}</footer>
    </div>
  );
};
export default GroceryList;
