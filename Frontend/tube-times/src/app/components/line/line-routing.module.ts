import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LineRoutesComponent } from './line-routes/line-routes.component';
import { LineStationComponent } from './line-station/line-station.component';
import { ListLineComponent } from './list-line/list-line.component';

const routes: Routes = [
    { path: 'line', component: ListLineComponent },
    { path: 'line/station/:station', component: LineStationComponent },
    { path: 'line/:line', redirectTo: 'line/:line/outbound' },
    { path: 'line/:line/:direction', component: LineRoutesComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LineRoutingModule { }