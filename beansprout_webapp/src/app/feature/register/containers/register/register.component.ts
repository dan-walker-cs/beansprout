import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { confirmPasswordValidator } from 'src/app/shared/directives/confirm-password.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title: String;
  accountRegistrationForm: FormGroup;

  constructor(private router: Router, private fb:FormBuilder) {
    this.title = 'Account Registration';

    this.accountRegistrationForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required, Validators.minLength(7)],
      confirmPassword: ['', Validators.required]
    }), { validators: confirmPasswordValidator };
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    if (this.accountRegistrationForm) {
      console.warn("Do better");
      return;
    }

    // call backend & persist user
  }
}
