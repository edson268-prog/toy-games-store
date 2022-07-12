import { Component, Input, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import { retry } from 'rxjs';

@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}

	//EJEMPLO PARA PRUEBA UNITARIA
	add(num1: number, num2: number): number {
		return Number(num1) + Number(num2);
	}
}
