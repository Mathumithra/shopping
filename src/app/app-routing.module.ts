import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartListComponent } from './cart-list/cart-list.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard'; 
//import { ProductComponent } from './product/product.component';
import { DashboardDataComponent } from './dashboard-data/dashboard-data.component';
import { UserComponent } from './user/user.component';
import { FinalComponent } from './final/final.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { OffersComponent } from './offers/offers.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
     canActivate : [AuthGuard], 
    children: [
      {
        path: '',
        component: DashboardDataComponent,
      },
      {
        path: 'user',
        component: UserComponent,
        children: [
  
      {
        path:'products',
        component: CartListComponent
      },
        {
          path:'addtocart',
          component: AddCartComponent
        },
      
        {
          path:'contact',
          component : ContactComponent
        },
        {
          path:'about',
          component : AboutComponent
        },
        {
          path:'offers',
          component : OffersComponent
        }

      ]}]},
      {
        path:'final',
        component : FinalComponent
        }]
    
  
  
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
