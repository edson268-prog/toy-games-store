import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductComponent } from './product.component';

export const routes: Routes = [{ path: '', component: ProductComponent }];

@NgModule({
	declarations: [ProductComponent],
	imports: [RouterModule.forChild(routes), SharedFormBasicModule, CommonModule]
})
export class ProductModule {}
