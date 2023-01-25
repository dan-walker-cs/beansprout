import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './containers/home/home.component';
import { LayoutModule } from 'src/app/shared/modules/layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    // Angular Modules
    CommonModule,

    // Custom Modules
    LayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
