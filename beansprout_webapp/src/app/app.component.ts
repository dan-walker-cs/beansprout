import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['/src/styles/styles.scss']
})
export class AppComponent {
  title: string;

  constructor() {
    this.title = 'beansprout_webapp';
  }
}
