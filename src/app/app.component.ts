import { Component } from '@angular/core';

// import the products from the models folder
import { inventory } from './models/inventory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'AngularShoppingCart';
  // pass the inventory variable down to the inventory component
  // in the inventory component, this data will be populated in the products variable
  inventory = inventory; 

  // create a shopping cart dictionary to keep track of the items added
  shoppingCart = {};

  // this function will keep track of the products in the shopping cart
  populateCart(product) {
    let productName = product.item;

    // check whether the shopping cart hash map contains the products
    if (!this.shoppingCart.hasOwnProperty(`${productName}`)) {
      this.shoppingCart[`${productName}`] = {quantity: 1, imgUrl: product.url};
    }
    else {
      this.shoppingCart[`${productName}`]['quantity'] += 1;
    }
  };
  
  removeItemFromCart(product) {
    this.shoppingCart[product]['quantity'] -= 1;

    // if the quantity reaches zero, remove the item from the shopping cart
    if (this.shoppingCart[product]['quantity'] === 0) {
      delete this.shoppingCart[product];
    }
  }
}
