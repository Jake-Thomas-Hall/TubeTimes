import { Component, OnInit } from '@angular/core';
import { slideInOnLoad } from 'src/app/animations/slide-in-on-load.animation';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    slideInOnLoad
  ]
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
