
import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
		selector: 'ai-star',
		templateUrl: 'app/shared/star.component.html',
		styleUrls: ['app/shared/star.component.css']
})
export class StarComponent implements OnChanges {
	@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

	@Input()	rating: number;
		starWidth: number;
		starDivWidth: number = 88;

	onClick(){
		this.ratingClicked.emit(`the rating ${this.rating} was clicked`);

	}
		ngOnChanges(): void {
			this.starWidth 　= this.rating * this.starDivWidth / 5;
		}

	
}