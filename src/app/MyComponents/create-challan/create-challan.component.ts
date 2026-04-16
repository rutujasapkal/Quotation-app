import { Component } from '@angular/core';
import { Products } from '../../Products';

@Component({
  selector: 'app-create-challan',
  templateUrl: './create-challan.component.html',
  styleUrl: './create-challan.component.css'
})
export class CreateChallanComponent {
  custName: string[] = [];
  quantity: string[] = [];
  product: string[] = [];
  rate: string[] = [];
  gst: string = '';
  discount: string = '';
  amount: number[] = [];
  finalAmount: number = 0.0;
  totalAmount: number = 0.0;
  gstAmount: number = 0.0;
  invoiceNumber: number = 123;
  rows = [{ noProdcts: 0 }];
  finalAmt = 90;
  fileName = 'D:\\Rutuja work\\ExcelSheet.xlsx';

  calcAmount(i: number) {
    // amount = parseFloat(this.quantityval)*parseInt(this.rateval)
    this.amount[i] = (parseFloat(this.quantity[i]) * parseFloat(this.rate[i]));

    console.log(this.product[i] + " = " + this.amount[i])
  }
  calcGSTAmount() {
    let sum = 0;
    for (let i = 0; i < this.amount.length; i++) {
      sum += this.amount[i];

    }
    this.gstAmount = sum * (parseFloat(this.gst)) / 100;
    this.totalAmount = sum + this.gstAmount;
  }
  calcFinalAmount() {

    // for(var amt of this.amount){
    //   this.totalAmount = this.amount[amt] + this.totalAmount;
    // }
    // this.gstAmount = this.totalAmount*(parseFloat(this.gst))/100
    this.finalAmount = this.totalAmount - parseFloat(this.discount);
  }



  addNewRow() {
    this.rows.push({ noProdcts: 0 });
  }

  removeRow() {
    this.rows.pop()
  }

  localItem: string | null;
  products: Products[];
  constructor() {
    this.localItem = localStorage.getItem("products");
    if (this.localItem == null) {
      this.products = []
    }
    else {
      this.products = JSON.parse(this.localItem);
    }
  }

}
