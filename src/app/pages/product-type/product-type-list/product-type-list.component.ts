import { Component, OnInit } from '@angular/core';
import { IProductTypeSearch } from 'src/app/commons/services/api/product/product-api.interface';
import { ProductTypeApiService } from 'src/app/commons/services/api/product/product-type-api.service';

@Component({
	selector: 'app-product-type-list',
	templateUrl: './product-type-list.component.html',
	styleUrls: ['./product-type-list.component.scss']
})
export class ProductTypeListComponent implements OnInit {
	typeSearched!: string;
	public columns: string[] = ['id', 'nombre', 'descripción', 'eliminar'];
	listProductTypes: IProductTypeSearch[] = [];
	constructor(private _productApiService: ProductTypeApiService) {}

	ngOnInit(): void {
		// this._loadProductTypes();
	}

	_loadProductTypes() {
		this._productApiService.searchProductType(this.typeSearched).subscribe({
			next: (response) => {
				this.listProductTypes = response.responseResult;
			}
		});
	}

	onDeleteProductType(id: number) {
		// console.log('Elimina registro: ' + id);
		this._productApiService.deleteProductType(id).subscribe(() => {
			this.listProductTypes = this.listProductTypes.filter((product: IProductTypeSearch) => {
				return product.id !== id;
			});
		});
	}
}
