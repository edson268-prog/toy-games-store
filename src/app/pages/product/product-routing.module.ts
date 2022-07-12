import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PATHS_PRODUCT_SUBPAGES } from 'src/app/commons/config/path-pages';
import { ProductComponent } from './product.component';

const routes: Routes = [
	{
		path: '',
		component: ProductComponent,
		children: [
			{
				path: PATHS_PRODUCT_SUBPAGES.prodSearch.onlyPath,
				loadChildren: () => import('./product-search/product-search.module').then((m) => m.ProductSearchModule)
			},
			{
				path: PATHS_PRODUCT_SUBPAGES.prodRegister.onlyPath,
				loadChildren: () => import('./product-register/product-register.module').then((m) => m.ProductRegisterModule)
			}
			// ,
			// {
			//     path: '',
			//     redirectTo: PATHS_PRODUCT_SUBPAGES.prodSearch.onlyPath
			// }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	//exports: [RouterModule],
})
export class ProductRoutingModule {}
