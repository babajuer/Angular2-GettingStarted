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
			<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav">
				<li><a [routerLink]="['/welcome']">welcome</a></li>
				<li><a [routerLink]="['/products']">products</a></li>
			</ul>
			</div><!-- /.navbar-collapse -->
		</div><!-- /.container-fluid -->
		</nav>

		<router-outlet></router-outlet>

	`,
	providers: [ ProductService ]

})
export class AppComponent {
	pageTItle: string = `Product Management`;
 }
