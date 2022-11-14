import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(
    private http: HttpClient
  ) {


  }

  // store the array of the current products in the cart.
  items: Product[] = [];

  //Define methods to add items to the cart, return cart items, and clear the cart items.

  addToCarts(product: Product){
    this.items.push(product);
  }

  getitems(){
    return this.items;
  }

  clearCarts(){
    this.items =[];
    return this.items
  }


  getShippingPrices() {
    return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
