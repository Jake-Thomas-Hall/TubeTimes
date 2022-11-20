import { Component, OnInit } from '@angular/core';
import { slideInOnLoad } from 'src/app/animations/slide-in-on-load.animation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    slideInOnLoad
  ]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
