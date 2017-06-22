import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
        <h1>Angular2: Getting Started fbj</h1>
		<h3>
		{{pageTItle}}
		</h3>
	`
})
export class AppComponent {
	pageTItle: string = `---haha this is title---`;
 }
