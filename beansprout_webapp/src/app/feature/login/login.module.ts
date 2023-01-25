import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './containers/login/login.component';
import { LayoutModule } from 'src/app/shared/modules/layout/layout.module';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    // Angular Modules
    CommonModule,
    
    // Custom Modules
    LayoutModule
  ],
  exports: [
    LoginComponent
  ]
})
export class LoginModule { }
