import { Component, NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { PATHS_PRODUCT_PAGES } from './commons/config/path-pages';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent
	},
	// {
	//     path: 'productSearch',
	//     component: ProductSearchComponent
	// }
	{
		path: PATHS_PRODUCT_PAGES.product.onlyPath,
		//component: ProductSearchComponent
		loadChildren: () => import('./pages/product/product.module').then((m) => m.ProductModule) //LAZY_LOADING
	},
	{
		path: PATHS_PRODUCT_PAGES.productType.onlyPath,
		//component: ProductRegisterComponent
		loadChildren: () => import('./pages/product-type/product-type.module').then((m) => m.ProductTypeModule)
	}
	// {
	//     path: '**',
	//     pathMatch: 'full',
	//     component: NotFoundComponent
	// }

	// { path: '404', component: NotFoundComponent },
	// { path: '**', redirectTo: '404' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)]
	//exports: [RouterModule],
})
export class AppRoutingModule {}
