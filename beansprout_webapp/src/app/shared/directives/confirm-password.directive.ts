import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

// TODO: Understand this file
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl):

ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
  
    return password === confirmPassword
        ? { confirmPassword: true }
        : null;
  };