import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';
import { LayoutModule } from 'src/app/shared_modules/layout/layout.module';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
