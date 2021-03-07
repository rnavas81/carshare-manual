import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManualComponent } from './views/manual/manual.component';
import { Version2Component } from './views/version2/version2.component';
import { LazyLoadImageModule } from "ng-lazyload-image";

@NgModule({
  declarations: [
    AppComponent,
    ManualComponent,
    Version2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
