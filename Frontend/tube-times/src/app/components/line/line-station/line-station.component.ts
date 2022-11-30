import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fadeInStaggerAlt } from 'src/app/animations/fade-in-stagger.animation';
import { StationDetail } from 'src/app/models/responses/station-detail.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-line-station',
  templateUrl: './line-station.component.html',
  styleUrls: ['./line-station.component.scss'],
  animations: [
    fadeInStaggerAlt
  ]
})
export class LineStationComponent implements OnInit {
  isLoading = true;
  stationDetail?: StationDetail;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.apiService.getStationDetail(params).subscribe(result => {
        this.isLoading = false;
        this.stationDetail = result;
      });
    });
  }

  getTimeToArrival(time: number): string {
    let minutes = Math.floor(time / 60);

    if (minutes < 1) {
      return "Due";
    }

    return `${minutes} min`
  }

  isNationalRailInterchange() {
    return this.stationDetail?.modes.some(x => x === 'national-rail');
  }
}
