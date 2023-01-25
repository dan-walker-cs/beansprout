import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';
import { LayoutModule } from 'src/app/shared_modules/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    // Angular Modules
    CommonModule,
    ReactiveFormsModule,
    // Custom Modules
    LayoutModule
  ],
  exports: [
    RegisterComponent
  ]
})
export class RegisterModule { }
