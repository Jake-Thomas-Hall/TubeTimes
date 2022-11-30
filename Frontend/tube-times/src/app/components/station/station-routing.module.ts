import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StationDetailComponent } from './station-detail/station-detail.component';
import { StationSearchComponent } from './station-search/station-search.component';

const routes: Routes = [
    { path: 'station', component: StationSearchComponent },
    { path: 'station/:station', component: StationDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class StationRoutingModule { }