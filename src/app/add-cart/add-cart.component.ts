import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';
import { CartService } from '../cart.service';
import { addcart } from '../model';
@Component({
  selector: 'app-add-cart',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit {
  userFormData:any;
 
  router: any;
  constructor(private activatedRoute:ActivatedRoute,private cartService:CartService) { }
  
  //this.userFormData = new FormGroup({})
  
  ngOnInit(): void {
  }
 

}
