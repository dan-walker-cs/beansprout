import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title: String;
  accountRegistrationForm: FormGroup;

  constructor(private router: Router) {
    this.title = 'Account Registration';

    // TODO: Update to use FormBuilder service
    this.accountRegistrationForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl('')
    });
   }

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    // TODO: Replace with validation & backend call
    console.warn(this.accountRegistrationForm.value);
  }

}
