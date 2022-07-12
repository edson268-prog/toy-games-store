import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/commons/services/api/product/product-api.interface';
import { ProductApiService } from 'src/app/commons/services/api/product/product-api.service';

@Component({
	selector: 'app-product-search',
	templateUrl: './product-search.component.html',
	styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {
	constructor(private _productApiService: ProductApiService) {}

	title: string = 'Productos';
	listProducts: IProduct[] = [];

	@Input()
	detail: IProduct[] = [];

	// private _loadProducts() {
	//   this._productApiService.getProducts().subscribe(
	//     // res => {
	//     //   console.log('Servicio Consumido ', res);
	//     // }
	//     {
	//       next: (response) => {
	//         this.listProducts = response.responseResult;
	//       }
	//     }
	//   );
	// }

	ngOnInit(): void {
		//this._loadProducts();
	}

	// onDeleteProduct(id:number){
	//   // console.log('Elimina registro: ' + id);
	//   this._productApiService.deleteProduct(id)
	//   .subscribe(() => {
	//     this.listProducts = this.listProducts.filter((product: IProduct) =>{
	//       return product.id !== id;
	//     })
	//   });
	// }
}
