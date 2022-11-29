import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { LineRoutingModule } from './line-routing.module';
import { ListLineComponent } from './list-line/list-line.component';
import { LineRoutesComponent } from './line-routes/line-routes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LineStatusComponent } from './line-status/line-status.component';
import { LineStationComponent } from './line-station/line-station.component';

@NgModule({
  declarations: [
    ListLineComponent,
    LineRoutesComponent,
    LineStatusComponent,
    LineStationComponent
  ],
  imports: [
    CommonModule,
    LineRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class LineModule { }
