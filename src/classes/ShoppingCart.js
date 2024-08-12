const ShoppingCartItem = require('./ShoppingCartItem');

class ShoppingCart {
  constructor() {
    this.items = []; 
  }

  addItem(product, quantity) {
    const existingItem = this.items.find(item => item.product.id === product.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push(new ShoppingCartItem(product, quantity));
    }
  }

  removeItem(productId) {
    this.items = this.items.filter(item => item.product.id !== productId);
  }

  getTotalItems() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  displayCart() {
    this.items.forEach(item => {
      console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice().toFixed(2)}`);
    });
    console.log(`Total items: ${this.getTotalItems()}`);
    console.log(`Total price: $${this.getTotalPrice().toFixed(2)}`);
  }
}

module.exports = ShoppingCart;
