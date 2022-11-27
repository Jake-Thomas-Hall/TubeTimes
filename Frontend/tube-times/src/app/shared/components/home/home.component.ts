import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { fadeInStagger } from 'src/app/animations/fade-in-stagger.animation';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInStagger
  ]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
