import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent  {

  // Define the product property. 
  product: Product | undefined;

  // Inject ActivatedRoute into the constructor() 

  constructor(

    private route: ActivatedRoute,
    private cartservice: CartService
    
    ){

  }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
  
    // Find the product that correspond with the id provided in route.
    this.product = products.find(product => product.id === productIdFromRoute);
  }


 

  /**
   * 
   * @param product 
   * which adds the current product to the cart
   */
  addToCart(product:Product){
    this.cartservice.addToCarts(product);

    window.alert('Your product has been added to the cart!');
  }



}