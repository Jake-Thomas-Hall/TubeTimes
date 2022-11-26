import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { BackButtonDirective } from './directives/back-button.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchHighlightDirective } from './directives/search-highlight.directive';

@NgModule({
  declarations: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective,
    SearchHighlightDirective
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    NavigationComponent,
    HomeComponent,
    BackButtonDirective,
    SearchHighlightDirective
  ]
})
export class SharedModule { }
