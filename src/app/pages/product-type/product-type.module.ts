import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedFormBasicModule } from 'src/app/commons/shared/shared-form-basic.module';
import { ProductTypeComponent } from './product-type.component';

export const routes: Routes = [{ path: '', component: ProductTypeComponent }];

@NgModule({
	declarations: [ProductTypeComponent],
	imports: [RouterModule.forChild(routes), SharedFormBasicModule]
})
export class ProductTypeModule {}
