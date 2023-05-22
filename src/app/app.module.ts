import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FileSizeToUnitPipeModule } from '@common/pipes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FileSizeToUnitPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
