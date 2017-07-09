import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService} from './product.service';

@Component({
    selector: 'pm-productList',
    templateUrl: 'app/products/product-list.component.html'
})
export class ProductListComponent implements OnInit {

	pageTitle: string = 'Product List';
	imageW: number = 30;
	imageH: number = 30;
	listFilter: string = 'cart';
    listFilter2: string = 'fbj';
    products: IProduct[];

	showImage: boolean = true;
    constructor(
        private _productService: ProductService
    ){

    }

test( event: string ) {
    console.log(`gagag:`, event);
    this.listFilter2= this.listFilter;
}
	toggleShowImage(): void {
		this.showImage = !this.showImage;
	};

	doRatingClicked(message: string): void {
		this.pageTitle = 'Product List ' + message;
	};

	ngOnInit(): void {
	    this.products = this._productService.getProduct();
		console.log('ngoninit.');
	}
 }
