import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { StationSearchComponent } from './station-search/station-search.component';
import { StationRoutingModule } from './station-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StationDetailComponent,
    StationSearchComponent
  ],
  imports: [
    CommonModule,
    StationRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class StationModule { }
