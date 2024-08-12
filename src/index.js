const Product = require('./classes/Product');
const ShoppingCart = require('./classes/ShoppingCart');

// Create some products
const apple = new Product(1, 'Apple', 0.5);
const banana = new Product(2, 'Banana', 0.25);
const orange = new Product(3, 'Orange', 0.75);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(apple, 3);
cart.addItem(banana, 5);
cart.addItem(orange, 2);

// Display the cart
console.log('Cart contents:');
cart.displayCart();

// Remove an item from the cart
cart.removeItem(1);

// Display the cart again
console.log('\nCart contents after removing product(s):');
cart.displayCart();
