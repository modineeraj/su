import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { SellerFormComponent } from './seller-form/seller-form.component';

const routes: Routes = [
  {path:'seller',component:SellerFormComponent},
  {path:'',component:LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
