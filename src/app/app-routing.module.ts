import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { LoginComponent } from './login/login.component';
//import { SideBarComponent } from './side-bar/side-bar.component';
//import { TopBarComponent } from './top-bar/top-bar.component';
//import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
  },
  
  
      {
        path:'products',
        component: CartListComponent
      },
        {
          path:'addtocart',
          component: AddCartComponent
        }
    
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
