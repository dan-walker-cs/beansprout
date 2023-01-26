import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterComponent } from './containers/register/register.component';
import { LayoutModule } from 'src/app/shared/modules/layout/layout.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AccountRegistrationFormComponent } from './components/account-registration-form/account-registration-form.component';

@NgModule({
  declarations: [
    RegisterComponent,
    AccountRegistrationFormComponent
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
