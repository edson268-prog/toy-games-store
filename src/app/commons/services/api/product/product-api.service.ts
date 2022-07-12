import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { INewProduct, IProduct, IProductType, IResponseProduct, IResponseSingleProduct } from './product-api.interface';

@Injectable({ providedIn: 'root' })
export class ProductApiService {
	constructor(private httpClient: HttpClient) {}

	getProducts(page: number, rows: number): Observable<IResponseProduct> {
		// return this.httpClient.get<IResponseProduct>('https://localhost:7194/api/Products?page=1&rows=5');
		return this.httpClient.get<IResponseProduct>('https://localhost:7194/api/Products?page=' + page + '&rows=' + rows);
	}

	addNewProduct(product: INewProduct): Observable<INewProduct> {
		return this.httpClient.post<INewProduct>('https://localhost:7194/api/Products', product);
	}

	updateProduct(product: IProduct): Observable<IProduct> {
		return this.httpClient.put<IProduct>(`https://localhost:7194/api/Products/${product.id}`, product);
	}

	deleteProduct(id: number): Observable<{}> {
		return this.httpClient.delete('https://localhost:7194/api/Products/' + id);
	}

	getProductById(id: number): Observable<IResponseSingleProduct> {
		return this.httpClient.get<IResponseSingleProduct>('https://localhost:7194/api/Products/' + id);
		//return this.httpClient.get('/api/Products?page=1&rows=5');
	}
}
