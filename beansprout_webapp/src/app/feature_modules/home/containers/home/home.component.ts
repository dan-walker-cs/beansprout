import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../../models/user.interface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  defaultGreeting: String = 'Welcome!';

  title: String;
  greeting: String;
  user: User;

  constructor(private router: Router) {
    this.title = 'Home';
    this.greeting = this.defaultGreeting;
    this.user = {};
  }

  calculateGreeting(): void {
    this.greeting = this.user?.username !== undefined
      ? 'Welcome, ' + this.user.username + '!'
      : this.defaultGreeting;
  }

  calculateUser(): void {
    // pull user?
  }

  loginBtnClick() {
    this.router.navigate(['/login']);
  }

  registerBtnClick() {
    this.router.navigate(['/register']);
  }

  ngOnInit(): void {
    this.calculateUser();
    this.calculateGreeting();
  }
}
