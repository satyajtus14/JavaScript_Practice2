const products = [
    {name:'Shampoo',price:300,quantity: 2},
    {name:'Hair Comb',price:100,quantity: 3},
    {name:'Shirt',price:700,quantity: 5},
    {name:'Pant',price:1200,quantity: 1},
]

// Total Cost:
function getShoppingTotal(products){
    let total = 0;
  for(const product of products){
      total = total + product.price;
  }

return total;
}

// Shopping Cart balance
function shoppingCart(products){
    let cart = 0;
    for(const product of products)
        {
            const cartBalance =  product.price * product.quantity;
            cart = cart + cartBalance;
           
    }

     return cart;
}

// Total Shopping Cost:
const total = getShoppingTotal(products);
console.log('Your Balance:',total);


// Total Shopping Cart Balance:
const shoppingCost = shoppingCart(products);
console.log('Your Cart Balance:',shoppingCost);