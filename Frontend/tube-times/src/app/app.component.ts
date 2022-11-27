import { Component, OnInit } from '@angular/core';
import { ChildrenOutletContexts } from '@angular/router';
import { slideInOut } from './animations/slide-in-out.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInOut
  ]
})
export class AppComponent implements OnInit{
  year: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }
}
