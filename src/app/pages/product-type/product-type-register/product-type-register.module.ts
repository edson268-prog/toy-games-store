import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductTypeListComponent } from '../product-type-list/product-type-list.component';
import { ProductTypeRegisterFormComponent } from '../product-type-register-form/product-type-register-form.component';
import { ProductTypeRegisterComponent } from './product-type-register.component';

export const routes: Routes = [{ path: '', component: ProductTypeRegisterComponent }];

@NgModule({
	declarations: [ProductTypeRegisterComponent, ProductTypeRegisterFormComponent],
	imports: [RouterModule.forChild(routes), CommonModule, FormsModule, SharedFormBasicModule]
})
export class ProductTypeRegisterModule {}
