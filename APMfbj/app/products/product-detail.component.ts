import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';

@Component({
    templateUrl: 'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit {
  	pageTitle: string = 'Product detail  999999';
    product: IProduct;
    constructor() { 
        
    }

    ngOnInit() { }
}