import { HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductTypeRegisterFormComponent } from './product-type-register-form/product-type-register-form.component';

describe('ProductTypeRegisterForm', () => {
	let component: ProductTypeRegisterFormComponent;
	let fixture: ComponentFixture<ProductTypeRegisterFormComponent>;
	//let de: DebugElement;
	//let el: HTMLElement;
	// const fakeActivatedRoute = {
	//     snapshot: {
	//       queryParams: {
	//         returnUrl: '/'
	//       }
	//     }
	//   };
	//   const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ReactiveFormsModule, FormsModule, HttpClientModule],
			declarations: [ProductTypeRegisterFormComponent]
		});

		fixture = TestBed.createComponent(ProductTypeRegisterFormComponent);
		component = fixture.componentInstance;
		component.ngOnInit();
	});

	it('Form invalido cuando no se llenan los campos', () => {
		expect(component.formGroup.valid).toBeFalsy();
	});

	it('Form invalido cuando se llenan los campos, pero no se cumple todas las validaciones', () => {
		component.formGroup.controls['name'].setValue('Producto');
		component.formGroup.controls['description'].setValue('Videojuego clasico');
		expect(component.formGroup.valid).toBeFalsy();
	});

	it('Verifica si campo "name" cumple con palabra inicial "Juguete"', () => {
		const name = component.formGroup.controls['name'];
		expect(name.valid).toBeFalsy();

		name.setValue('Juguete de plástico');
		console.log(name.hasError('customProductTypeNameValidator'));
		expect(name.hasError('customProductTypeNameValidator')).toBeFalsy();
	});

	it('Form valido cuando se llenan los campos y SI se cumple todas las validaciones', () => {
		component.formGroup.controls['name'].setValue('Juguete coleccionable');
		component.formGroup.controls['description'].setValue('Juguete Estatuilla de colección');
		expect(component.formGroup.valid).toBeTruthy();
	});
});
