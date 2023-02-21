import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuyerFormComponent } from './buyer-form/buyer-form.component';
import { LandingComponent } from './landing/landing.component';
import { SellerFormComponent } from './seller-form/seller-form.component';

const routes: Routes = [
  {path:'seller',component:SellerFormComponent},
  {path:'buyer',component:BuyerFormComponent},
  {path:'',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
