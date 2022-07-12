import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProductType, IProductTypeResponse } from './product-api.interface';

@Injectable({ providedIn: 'root' })
export class ProductTypeApiService {
	constructor(private httpClient: HttpClient) {}

	// addNewProductType(product: IProductType): Observable<IProductType> {
	//     return this.httpClient.post<IProductType>('https://localhost:7194/api/ProductTypes', product);
	// }

	addNewProductType(product: any): Observable<any> {
		return this.httpClient.post<any>('https://localhost:7194/api/ProductTypes', product);
	}

	searchProductType(productName: string): Observable<IProductTypeResponse> {
		return this.httpClient.get<IProductTypeResponse>('https://localhost:7194/api/ProductTypes?filter=' + productName);
	}

	deleteProductType(id: number): Observable<{}> {
		return this.httpClient.delete('https://localhost:7194/api/ProductTypes/' + id);
	}
}
