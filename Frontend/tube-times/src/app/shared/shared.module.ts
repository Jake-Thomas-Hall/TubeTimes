import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchHighlightDirective } from './directives/search-highlight.directive';
import { ToastsComponent } from './components/toasts/toasts.component';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective,
    SearchHighlightDirective,
    ToastsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    ToastsComponent,
    BackButtonDirective,
    SearchHighlightDirective
  ]
})
export class SharedModule { }
