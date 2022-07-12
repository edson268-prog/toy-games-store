import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	//ARRAY DE OPCIONES DE MENU
	menuData = [
		{
			title: 'Productos',
			icon: 'fa fa-file',
			url: 'https://www.google.com/'
		}
	];
}
