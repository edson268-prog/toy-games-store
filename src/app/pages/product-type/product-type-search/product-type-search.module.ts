import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductTypeListComponent } from '../product-type-list/product-type-list.component';
import { ProductTypeRegisterFormComponent } from '../product-type-register-form/product-type-register-form.component';
import { ProductTypeSearchComponent } from './product-type-search.component';

export const routes: Routes = [
	{
		path: '',
		children: [
			{ path: '', component: ProductTypeSearchComponent },
			{ path: ':id', component: ProductTypeRegisterFormComponent }
		]
	}
];

@NgModule({
	declarations: [ProductTypeSearchComponent, ProductTypeListComponent],
	imports: [RouterModule.forChild(routes), SharedFormBasicModule, CommonModule, MatTableModule, FormsModule]
})
export class ProductTypeSearchModule {}
