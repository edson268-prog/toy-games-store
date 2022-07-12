import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';
import { IProduct } from 'src/app/commons/services/api/product/product-api.interface';
import { ProductApiService } from 'src/app/commons/services/api/product/product-api.service';

@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.scss']
})

//AfterViewInit
export class ProductListComponent implements OnInit {
	listProducts: IProduct[] = [];
	public columns: string[] = ['id', 'nombre', 'descripción', 'compañia', 'actualizar', 'eliminar'];
	totalRecords!: number;
	totalPages!: number;
	constructor(private _productApiService: ProductApiService) {}

	ngAfterViewInit(): void {
		this.paginator.page
			.pipe(tap(() => this._loadProducts(this.paginator?.pageIndex ?? 0, this.paginator?.pageSize ?? 3)))
			.subscribe();
	}

	@ViewChild(MatPaginator) paginator!: MatPaginator;

	private _loadProducts(page: number, rows: number) {
		this._productApiService.getProducts(page, rows).subscribe({
			next: (response) => {
				this.listProducts = response.responseResult;
				this.totalRecords = response.totalRecords;
				this.totalPages = response.totalPages;
			}
		});
	}

	ngOnInit(): void {
		this._loadProducts(this.paginator?.pageIndex ?? 0, this.paginator?.pageSize ?? 3);
	}

	onDeleteProduct(id: number) {
		// console.log('Elimina registro: ' + id);
		this._productApiService.deleteProduct(id).subscribe(() => {
			this.listProducts = this.listProducts.filter((product: IProduct) => {
				return product.id !== id;
			});
		});
	}
}
