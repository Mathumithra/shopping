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
//import { NameComponent } from './name/name.component';


@NgModule({
  declarations: [
    AppComponent,
    CartListComponent,
    AddCartComponent,
   
    ProductDirective,
        LoginComponent,
    
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
