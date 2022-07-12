import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { INewProduct } from 'src/app/commons/services/api/product/product-api.interface';

@Component({
	selector: 'app-product-form',
	templateUrl: './product-form.component.html',
	styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
	@Input()
	detail: INewProduct[] = [];

	@Output()
	create: EventEmitter<INewProduct> = new EventEmitter<INewProduct>();

	handleSubmit(product: INewProduct, isValid: boolean | null) {
		if (isValid) {
			this.create.emit(product);
		}
	}
}
