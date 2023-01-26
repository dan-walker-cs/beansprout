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

  title: String = 'Account Registration';

  constructor(private router: Router, private fb:FormBuilder) {}

  ngOnInit(): void {
  }
}
