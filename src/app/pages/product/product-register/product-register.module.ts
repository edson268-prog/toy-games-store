import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductFormUpdateComponent } from '../product-form-update/product-form-update.component';
import { ProductFormComponent } from '../product-form/product-form.component';
import { ProductRegisterComponent } from './product-register.component';

export const routes: Routes = [{ path: '', component: ProductRegisterComponent }];

@NgModule({
	declarations: [ProductRegisterComponent, ProductFormComponent, ProductFormUpdateComponent],
	imports: [RouterModule.forChild(routes), SharedFormBasicModule, CommonModule, FormsModule],
	exports: [ProductRegisterComponent]
})
export class ProductRegisterModule {}
