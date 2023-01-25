import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeModule } from './feature/home/home.module';
import { LayoutModule } from './shared/modules/layout/layout.module';
import { RegisterModule } from './feature/register/register.module';
import { LoginModule } from './feature/login/login.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Angular Modules
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    
    // Custom Modules
    HomeModule,
    LayoutModule,
    RegisterModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
