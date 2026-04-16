import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxPrintModule} from 'ngx-print';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './MyComponents/products/products.component';
import { AddProductComponent } from './MyComponents/add-product/add-product.component';
import { FormsModule } from '@angular/forms';
import { CreateChallanComponent } from './MyComponents/create-challan/create-challan.component';
import { HomeComponent } from './MyComponents/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AddProductComponent,
    CreateChallanComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
