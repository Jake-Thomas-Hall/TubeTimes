import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LineModule } from './components/line/line.module';
import { ReactiveFormsModule } from '@angular/forms';
import { StationModule } from './components/station/station.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule,
    LineModule,
    StationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
