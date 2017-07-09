import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started </h1>
		<h3>
		{{pageTItle}}
		</h3>
		 
		<pm-productList></pm-productList>

	`,
	providers: [ ProductService ]

})
export class AppComponent {
	pageTItle: string = `Product Management`;
 }
