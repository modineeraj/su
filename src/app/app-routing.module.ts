import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { LandingComponent } from './landing/landing.component';
import { SellerFormComponent } from './seller-form/seller-form.component';
import { ShowItemComponent } from './show-item/show-item.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {path:'seller',component:SellerFormComponent},
  {path:'buyer',component:BuyerFormComponent},
  {path:'showItem/:id',component:ShowItemComponent},
  {path:'signup',component:SignupComponent},
  {path:'signin',component:SigninComponent},
  {path:'',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
