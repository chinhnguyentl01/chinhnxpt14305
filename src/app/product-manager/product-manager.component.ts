import { Component, OnInit } from '@angular/core';
import {Data} from '../Mockdata'
import {data} from '../Mockdata'
import { Product } from '../Product';
import { Product1 } from '../Product1';
import { from } from 'rxjs';
@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

 
  constructor() { }
  
  ngOnInit(): void {
  }
  products = Data;
  product1 = data;

  selected: Product;
  showDetail(product){
  this.selected = product;
  console.log(this.selected);
  }
  removeItem(id){
    this.products = this.products.filter(product => product.id !==id);
   }


  selected1 : Product1;
  showDetail1(product1){
    this.selected1 = product1;
    console.log(this.selected1);
    }
  removeItem1(id1){
    this.product1 = this.product1.filter(product1 => product1.id1 !==id1)
  }

}
