import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './containers/login/login.component';
import { LayoutModule } from 'src/app/shared_modules/layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
