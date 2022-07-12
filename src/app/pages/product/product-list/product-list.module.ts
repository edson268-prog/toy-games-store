import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductListComponent } from './product-list.component';

export const routes: Routes = [{ path: '', component: ProductListComponent }];

@NgModule({
	declarations: [],
	imports: [SharedFormBasicModule, CommonModule, FormsModule]
})
export class ProductListModule {}
