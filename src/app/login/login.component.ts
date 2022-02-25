import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup
  constructor(private cartService:CartService,private router:Router) {
    this.loginForm = new FormGroup({
      'email' : new FormControl(''),
      'password' : new FormControl('')
    })}



  ngOnInit(): void {
  }
  login(){
    if(this.loginForm.valid){
      this.cartService.login(this.loginForm.value).subscribe((data: { token: string; }) => {
        console.log(data)
        window.localStorage.setItem("app_token",data.token)
          this.router.navigate(["/product"])
        // Store the Token in Local storage
        // Redirect him to Dashboard
      })
    }
}


}
