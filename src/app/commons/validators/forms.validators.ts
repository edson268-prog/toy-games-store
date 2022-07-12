import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

const regexProductTypeName = new RegExp('^Juguete');
export const customProductTypeNameValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
	const value = control.value as string;
	//console.log('VALOR NAME:' + control.value);

	if (!regexProductTypeName.test(value)) {
		// console.log('INVALIDO');
		return { customProductTypeNameValidator: true };
	}
	return null;
};
