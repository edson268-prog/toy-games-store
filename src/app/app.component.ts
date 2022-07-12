import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
	title = 'toy-games-store-front';
	constructor() {
		console.log('----Constructor----');
		this.title = 'Toys and Games';
	}
	ngOnInit(): void {
		console.log('----On Init----');
	}
	ngAfterViewInit(): void {
		console.log('----AfterViewInit----');
	}
}
