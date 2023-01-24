import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './containers/home/home.component';
import { LayoutModule } from 'src/app/shared_modules/layout/layout.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    LayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
