import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // define the items property to store the products in the cart bu use of service 
  items = this.cartservice.getitems()
   // gather the user's name and address 
   checkOutForm = this.formBuilder.group({
        name: '',
        address :''
  });


  

  // here i injected the servcie in  this component  use it by adding it to the constructor().
  constructor(
    private cartservice :CartService ,
    private formBuilder: FormBuilder
) {}

    onSubmit(){
      // process the checkout data 
    this.items =  this.cartservice.clearCarts()
    console.warn('your order has been submitted',this.checkOutForm.value);
    this.checkOutForm.reset();
    
    
    }

  ngOnInit(): void {
  }




 
}
