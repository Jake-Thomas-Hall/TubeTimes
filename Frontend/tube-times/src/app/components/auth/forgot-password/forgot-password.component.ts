import { Component, OnInit } from '@angular/core';
import { slideInOnLoad } from 'src/app/animations/slide-in-on-load.animation';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  animations: [
    slideInOnLoad
  ]
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
