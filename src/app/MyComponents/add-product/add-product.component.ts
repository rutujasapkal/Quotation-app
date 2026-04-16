import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../../Products'; 

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {
  newProd:string;
  @Output() productAdd : EventEmitter<Products> =new EventEmitter();
    addNewProd(){
      const productNew = {productId: 1, productName : this.newProd};
      this.productAdd.emit(productNew);
    }
  }

