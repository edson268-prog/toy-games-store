import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PATHS_PRODUCT_TYPE_SUBPAGES } from 'src/app/commons/config/path-pages';
import { ProductTypeComponent } from './product-type.component';

export const routes: Routes = [
	{
		path: '',
		component: ProductTypeComponent,
		children: [
			{
				path: PATHS_PRODUCT_TYPE_SUBPAGES.prodTypeSearch.onlyPath,
				loadChildren: () =>
					import('./product-type-search/product-type-search.module').then((m) => m.ProductTypeSearchModule)
			},
			{
				path: PATHS_PRODUCT_TYPE_SUBPAGES.prodTypeRegister.onlyPath,
				loadChildren: () =>
					import('./product-type-register/product-type-register.module').then((m) => m.ProductTypeRegisterModule)
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)]
	//exports: [RouterModule],
})
export class ProductTypeRoutingModule {}
