import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
	INewProduct,
	IProduct,
	IResponseProduct,
	IResponseSingleProduct
} from 'src/app/commons/services/api/product/product-api.interface';
import { ProductApiService } from 'src/app/commons/services/api/product/product-api.service';

@Component({
	selector: 'app-product-form-update',
	templateUrl: './product-form-update.component.html',
	styleUrls: ['./product-form-update.component.scss']
})
export class ProductFormUpdateComponent implements OnInit {
	paramId: number = 0;

	selectedProduct!: IProduct;
	//selectedProduct: IProduct[] = [];
	//selectedProduct!: IResponseProduct;

	constructor(private router: Router, private route: ActivatedRoute, private _productApiService: ProductApiService) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe((params) => {
			if (params.has('id')) {
				this.paramId = Number(params.get('id'));
				this._productApiService.getProductById(this.paramId).subscribe({
					next: (response) => {
						this.selectedProduct = response.responseResult;
						console.log(this.selectedProduct);
					}
				});
			}
		});
	}

	@Input()
	detail: INewProduct[] = [];

	@Output()
	create: EventEmitter<INewProduct> = new EventEmitter<INewProduct>();

	handleSubmitUpdate(product: IProduct, isValid: boolean | null) {
		product.id = this.paramId;
		// product.productTypeId = 2;
		console.log(product);
		this._productApiService.updateProduct(product).subscribe((data: IProduct) => {});
	}
}
