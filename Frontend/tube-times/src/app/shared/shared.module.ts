import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchHighlightDirective } from './directives/search-highlight.directive';
import { ToastsComponent } from './components/toasts/toasts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective,
    SearchHighlightDirective,
    ToastsComponent,
    ClickOutsideDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    ToastsComponent,
    BackButtonDirective,
    SearchHighlightDirective,
    ClickOutsideDirective
  ]
})
export class SharedModule { }
