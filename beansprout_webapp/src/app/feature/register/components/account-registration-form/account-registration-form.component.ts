import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { confirmPasswordValidator } from 'src/app/shared/directives/confirm-password.directive';

@Component({
  selector: 'app-account-registration-form',
  templateUrl: './account-registration-form.component.html',
  styleUrls: ['./account-registration-form.component.sass']
})
export class AccountRegistrationFormComponent implements OnInit {
  passwordMismatch: boolean = false;
  accountRegistrationForm!: FormGroup;
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.accountRegistrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(7)]],
      confirmPassword: ['', Validators.required]
    }, {validators: confirmPasswordValidator});
  }

  onSubmit(): void {
    this.passwordMismatch = this.accountRegistrationForm.errors?.['passwordMisMatch']
      ? true
      : false;

    if (this.accountRegistrationForm.valid) {
      // TODO: call backend to persist user
      console.log('CALLING BACKEND TO REGISTER USER');
    }
  }
  
  get username() {
    return this.accountRegistrationForm.get('username');
  }

  get password() {
    return this.accountRegistrationForm.get('password');
  }

  get confirmPassword() {
    return this.accountRegistrationForm.get('confirmPassword');
  }
}
