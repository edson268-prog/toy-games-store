import { HtmlParser } from '@angular/compiler';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
	let app: ProductComponent;

	beforeEach(waitForAsync(() => {
		app = new ProductComponent();
	}));

	it('la suma debe dar 4', waitForAsync(() => {
		expect(app.add(2, 2)).toEqual(4);
	}));
});

// describe('ProductFormComponent', () =>{
//     beforeEach(waitForAsync(() => {
//         TestBed.configureTestingModule({
//             declarations: [
//                 ProductFormComponent
//             ],
//             providers: []
//         }).compileComponents();

//         TestBed.configureTestingModule({
//             declarations: [ ProductComponent]
//         }).createComponent(ProductComponent);
//     }));

//     it('Validar que el formulario sea invalido cuando está vacio', waitForAsync(() =>{
//         // (<HTMLInputElement>document.getElementById('name')).value = '';
//         // (<HTMLInputElement>document.getElementById('company')).value = '';
//         // (<HTMLInputElement>document.getElementById('price')).value = '';

//         const form = (<HTMLFormElement>document.getElementById('formAddProduct')).checkValidity();
//         expect(form).toEqual(false);
//     }))
// })
