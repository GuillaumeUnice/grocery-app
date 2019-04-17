import axios from 'axios';

const API_URL = 'http://localhost:8080/api';

export const getGroceryItems = async () => {
  return await axios(`${API_URL}/grocery`);
};

export const removeGroceryItem = async deleteId => {
  return await axios.delete(`${API_URL}/grocery/${deleteId}`);
};

export const updateGroceryItem = async updateItem => {
  return await axios.put(`${API_URL}/grocery/${updateItem.id}`, {
    ...updateItem
  });
};

export const addGroceryItem = async addItem => {
  return await axios.post(`${API_URL}/grocery`, { ...addItem });
};
