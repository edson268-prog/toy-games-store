import { Component, Input, OnInit } from '@angular/core';
import { ProductApiService } from 'src/app/commons/services/api/product/product-api.service';
import { INewProduct } from 'src/app/commons/services/api/product/product-api.interface';

@Component({
	selector: 'app-product-register',
	templateUrl: './product-register.component.html',
	styleUrls: ['./product-register.component.scss']
})
export class ProductRegisterComponent implements OnInit {
	newProduct: INewProduct[] = [];
	constructor(private _productApiService: ProductApiService) {}

	ngOnInit(): void {}

	onCreateProduct(event: INewProduct) {
		//console.log(event);
		event.productTypeId = 1;
		this._productApiService.addNewProduct(event).subscribe((data: INewProduct) => {
			this.newProduct = Object.assign({}, this.newProduct, event);
		});
	}
}
