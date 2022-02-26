import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-data',
  templateUrl: './dashboard-data.component.html',
  styleUrls: ['./dashboard-data.component.css']
})
export class DashboardDataComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  logout(){
    this.router.navigate(["/final"])
  }

}
