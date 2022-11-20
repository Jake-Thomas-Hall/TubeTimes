import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  year: string = '';

  constructor(
  ) { }

  ngOnInit(): void {
    this.year = new Date().getFullYear().toString();
  }
}
