import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective
  ]
})
export class SharedModule { }
