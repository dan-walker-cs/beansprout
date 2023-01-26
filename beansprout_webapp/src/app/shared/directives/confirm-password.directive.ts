import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl):
    ValidationErrors | null => {
        const passwordControl = control.get('password');
        const confirmPasswordControl = control.get('confirmPassword');

        return passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value
            ? { passwordMisMatch: true }
            : null;
    };