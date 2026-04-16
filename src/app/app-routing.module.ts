import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './MyComponents/products/products.component';
import { CreateChallanComponent } from './MyComponents/create-challan/create-challan.component';
import { HomeComponent } from './MyComponents/home/home.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', component: HomeComponent},
  {path: 'newChallan', component: CreateChallanComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
