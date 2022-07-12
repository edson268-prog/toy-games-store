import { Component, OnInit } from '@angular/core';
import { yearsPerPage } from '@angular/material/datepicker';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
	year: number;
	constructor() {
		this.year = new Date().getFullYear();
	}

	ngOnInit(): void {}
}
