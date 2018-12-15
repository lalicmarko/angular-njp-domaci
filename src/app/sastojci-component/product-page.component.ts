import {Component, NgModule, OnInit} from '@angular/core';
import { PRO } from '../mockupData'
import { Product } from '../domain/product'
import { MatTable } from '@angular/material';

@NgModule({
  imports: [MatTable]
})

@Component({
  selector: 'app-product-page',
  styleUrls: ['./product-page.component.css'],
  templateUrl: './product-page.component.html'
})
export class ProductPageComponent implements OnInit {

  products: Product[];
  newPrName: string;
  headElements: String[];
  errMessage: string;

  constructor() {
    this.headElements = ['ID', 'Ime sastojka'];
  }

  ngOnInit() {
    this.products = PRO;
  }

  add(): void {
    console.log(this.newPrName);
    for(let proj of this.products) {
      if(proj.name == this.newPrName) {
        this.errMessage = "Već ste uneli ovaj recept: " + this.newPrName;
        return;
      }
    }
    let noviSastojak = new Product();
    noviSastojak.name = this.newPrName;
    noviSastojak.id = this.products.length + 1;
    noviSastojak.check = false;
    this.products.push(noviSastojak);
    this.errMessage = "";
  }

}
