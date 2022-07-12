import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { IProductType } from 'src/app/commons/services/api/product/product-api.interface';
import { ProductApiService } from 'src/app/commons/services/api/product/product-api.service';
import { ProductTypeApiService } from 'src/app/commons/services/api/product/product-type-api.service';
import { customProductTypeNameValidator } from 'src/app/commons/validators/forms.validators';

@Component({
	selector: 'app-product-type-register-form',
	templateUrl: './product-type-register-form.component.html',
	styleUrls: ['./product-type-register-form.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: ProductTypeRegisterFormComponent
		}
	]
})
export class ProductTypeRegisterFormComponent implements OnInit {
	//productType: FormGroup;
	//productTypeForm: FormGroup;
	newProductType!: IProductType;

	formGroup!: FormGroup;

	// createFormGroup(){
	//   return new FormGroup({
	//     name: new FormGroup(''),
	//     description: new FormGroup(''),
	//   });
	// }

	private _loadFormGroup(): void {
		this.formGroup = this._formBuilder.group({
			name: [null, [customProductTypeNameValidator, Validators.required]],
			description: [null, [Validators.required]]
		});
	}

	constructor(private _productTypeApiService: ProductTypeApiService, private _formBuilder: FormBuilder) {
		// this.productTypeForm = this.createFormGroup();
		// this.productType = new FormGroup({
		//   name: new FormGroup<string>(''),
		//   description: new FormGroup<string>(''),
		// });
		this._loadFormGroup();
	}

	ngOnInit(): void {}

	onResetForm() {
		//this.productTypeForm.reset();
	}

	onSaveForm() {
		console.log(this.formGroup.value);

		this._productTypeApiService.addNewProductType(this.formGroup.value).subscribe((data: IProductType) => {
			Object.assign({}, this.formGroup);
		});
	}
}
