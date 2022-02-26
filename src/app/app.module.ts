import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {  UserListComponent } from './cart-list/cart-list.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { CartListComponent } from './cart-list/cart-list.component';
import {HttpClientModule} from '@angular/common/http';

import { ProductDirective } from './product.directive';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { UserComponent } from './user/user.component';
import { FinalComponent } from './final/final.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
//import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    AddCartComponent,
   
    ProductDirective,
        LoginComponent,
        SideBarComponent,
        TopBarComponent,
        DashboardComponent,
        DashboardDataComponent,
        UserComponent,
        FinalComponent,
        ContactComponent,
        AboutComponent,
        OffersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
