import { Component } from '@angular/core';
import { ProductService } from './products/product.service';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started </h1>
		<h3>
		{{pageTItle}}
		</h3>

		<nav class="navbar navbar-default">
		<div class="container-fluid">
			<ul class="nav">
			<li><a [routerLink]="['/welcome']">welcome</a></li>
			<li><a [routerLink]="['/products']">products</a></li>
			</ul>
		</div>
		</nav>

		<router-outlet></router-outlet>

	`,
	providers: [ ProductService ]

})
export class AppComponent {
	pageTItle: string = `Product Management`;
 }
