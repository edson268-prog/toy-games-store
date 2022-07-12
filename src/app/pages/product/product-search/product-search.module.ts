import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductSearchComponent } from './product-search.component';
import { MatTableModule } from '@angular/material/table';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductListModule } from '../product-list/product-list.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductFormUpdateComponent } from '../product-form-update/product-form-update.component';

//export const routes: Routes = [{ path: '', component: ProductSearchComponent}];

export const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: ProductSearchComponent },
			{ path: ':id', component: ProductFormUpdateComponent }
		]
	}
];

@NgModule({
	declarations: [ProductSearchComponent, ProductListComponent],
	imports: [RouterModule.forChild(routes), SharedFormBasicModule, CommonModule, ProductListModule, MatTableModule]
})
export class ProductSearchModule {}
