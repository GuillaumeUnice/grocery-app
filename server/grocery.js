class Grocery {
  constructor() {
    if (!Grocery.instance) {
      this.AI = 8;
      this.items = [
        { id: 1, name: 'Tomatoes', quantity: 5 },
        { id: 2, name: 'Pinapple', quantity: 1 },
        { id: 3, name: 'Biscuit', quantity: 2 },
        { id: 4, name: 'Milk', quantity: 3 },
        { id: 7, name: 'Cheese', quantity: 3 }
      ];
      Grocery.instance = this;
    }
    return Grocery.instance;
  }

  getAllGrocery() {
    return this.items;
  }
  getGrocery(id) {
    return this.items.find(item => item.id === id);
  }
  updateGrocery(grocery) {
    grocery.id = parseInt(grocery.id, 10);
    grocery.quantity = parseInt(grocery.quantity, 10);
    this.items.forEach((item, i) => {
      if (item.id === grocery.id) {
        this.items[i] = grocery;
      }
    });
  }
  addGrocery(grocery) {
    const newItem = { ...grocery, id: this.AI };
    this.AI++;
    this.items.push(newItem);
    return newItem;
  }

  deleteGrocery(id) {
    this.items = this.items.filter(item => item.id !== id);
  }
}

const instance = new Grocery();

module.exports = instance;
