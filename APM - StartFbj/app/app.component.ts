import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started </h1>
		<h3>
		{{pageTItle}}
		</h3>
		 
		<pm-productList></pm-productList>

	`
})
export class AppComponent {
	pageTItle: string = `Product Management`;
 }
