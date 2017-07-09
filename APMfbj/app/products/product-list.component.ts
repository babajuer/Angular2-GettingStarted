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
	listFilter: string ;
    products: IProduct[];
    errorMessage: string;
	showImage: boolean = true;
    constructor(
        private _productService: ProductService
    ){

    }

	toggleShowImage(): void {
		this.showImage = !this.showImage;
	};

	doRatingClicked(message: string): void {
		this.pageTitle = 'Product List ' + message;
	};

	ngOnInit(): void {
	    this._productService.getProduct()
            .subscribe(products => this.products = products,
                        error => this.errorMessage = <any>error);
	}
 }
