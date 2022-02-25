import { Component, OnInit } from '@angular/core';
 import { CartService } from '../cart.service';
import { Shopping } from '../model';
import { Observable } from 'rxjs'; 
import { addcart } from '../model';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
import { newArray } from '@angular/compiler/src/util';
import { FormGroup,FormArray } from '@angular/forms';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  CartList:Observable<Array<Shopping>> = this.cartService.Shopping();
 
  now = new Date()
  
 
  isPosting: boolean = false;
  constructor(private cartService:CartService,private router:Router) { 
    //this.CartList= new FormGroup({

   // })
  }
  
  ngOnInit(): void {
 
}
 postFormData(){

    /* this.cartService.addcart(this.CartList).subscribe((data) => {

        this.router.navigate(["/addtocart"])
    }) } */
    }

    }  /*   addcartid:any){
      let confirmRes = confirm("Are you sure do you want to delete?")
      if(confirmRes){
        this.cartService.addcart(id).subscribe(() => {
          this.fetchData()
        })
      }
    }
  fetchData() {
    throw new Error('Method not implemented.');
  } */
   
  












