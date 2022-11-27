import { Component, Input } from '@angular/core';
import { chevronToggle } from 'src/app/animations/chevon-toggle-animation';
import { fadeInOut } from 'src/app/animations/fade-in-out.animation';
import { slideInOut } from 'src/app/animations/slide-in-out.animation';
import { Line, LineStatus } from 'src/app/models/responses/lines.response.model';

@Component({
  selector: 'app-line-status',
  templateUrl: './line-status.component.html',
  styleUrls: ['./line-status.component.scss'],
  animations: [
    fadeInOut,
    chevronToggle
  ]
})
export class LineStatusComponent {
  @Input() status!: LineStatus;
  expanded = false;

  constructor() {
  }

  expand() {
    this.expanded = !this.expanded;
  }
}
