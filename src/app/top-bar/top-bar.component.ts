import { Component, OnInit } from '@angular/core';
//import { Router } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  
 /*  logout(){
    window.localStorage.removeItem("app_token");
    this.router.navigate(["/login"]) }*/
    logout(){
      this.router.navigate(["/dashboard/user/final"])
    }
  }

