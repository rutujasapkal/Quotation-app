import { Component } from '@angular/core';
import { Products } from '../../Products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  localItem: string | null;
  products:Products[];
  constructor(){
    this.localItem = localStorage.getItem("products");
    if(this.localItem ==null){
      this.products = []
  }
  else{
    this.products = JSON.parse(this.localItem);
  }
}
addProduct(prod: Products){
  console.log(prod);
  this.products.push(prod);
  localStorage.setItem("products", JSON.stringify(this.products));
}

deleteProduct(prod: Products){
  console.log(prod);
    const index = this.products.indexOf(prod);
    this.products.splice(index, 1);
    localStorage.setItem("products", JSON.stringify(this.products));
}

ngOnInit(): void {
   
}
}
