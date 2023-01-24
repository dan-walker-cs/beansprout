import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  title: String;

  username: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(private router: Router) {
    this.title = 'Register';

    this.username = new FormControl();
    this.password = new FormControl();
    this.confirmPassword = new FormControl();
   }

  ngOnInit(): void {
  }

  

}
