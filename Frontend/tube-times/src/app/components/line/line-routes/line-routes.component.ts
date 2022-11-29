import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { fadeInStagger, fadeInStaggerAlt } from 'src/app/animations/fade-in-stagger.animation';
import { fadeIn } from 'src/app/animations/fade-in.animation';
import { LineRoute } from 'src/app/models/responses/line-route.response.model';
import { OrderedLineRoute } from 'src/app/models/responses/ordered-line-route.response.model';
import { StopPoint } from 'src/app/models/responses/stop-point.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-line-routes',
  templateUrl: './line-routes.component.html',
  styleUrls: ['./line-routes.component.scss'],
  animations: [
    fadeInStagger,
    fadeIn,
    fadeInStaggerAlt
  ]
})
export class LineRoutesComponent implements OnInit {
  params: Params = {};
  queryParams: Params = {};
  lineRoute?: LineRoute;
  orderedLineRoutes?: OrderedLineRoute[] = [];
  hasNightRoutes = false;
  isLoading = true;
  routeForm: FormGroup;
  selectedRoute?: OrderedLineRoute;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { 
    this.routeForm = this.fb.group({
      route: [0]
    });
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap(sv => {
        this.isLoading = true;
        if (this.params['line'] !== sv['line']) {
          this.lineRoute = undefined;
        }
        this.params = sv;

        return this.apiService.getLineRoute(sv)
      })
    ).subscribe(result => {
      this.hasNightRoutes = result.orderedLineRoutes.some(x => x.serviceType === 'Night');
      this.lineRoute = result;

      if (!this.route.snapshot.queryParams['serviceType']) {
        this.orderedLineRoutes = this.lineRoute.orderedLineRoutes.filter(x => x.serviceType === 'Regular');
      }
      else {
        this.orderedLineRoutes = this.lineRoute.orderedLineRoutes.filter(x => x.serviceType === 'Night');
      }

      if (this.orderedLineRoutes?.length > 0) {
        this.routeForm.patchValue({route: [0]});
        
      }

      this.isLoading = false;
    });

    this.route.queryParams.subscribe(result => {
      this.queryParams = result;

      if (this.lineRoute) {
        if (!result['serviceType']) {
          this.orderedLineRoutes = this.lineRoute.orderedLineRoutes.filter(x => x.serviceType === 'Regular');
        }
        else {
          this.orderedLineRoutes = this.lineRoute.orderedLineRoutes.filter(x => x.serviceType === 'Night');
        }
  
        if (this.orderedLineRoutes.length > 0) {
          this.routeForm.patchValue({route: [0]});
        }
      }      
    });

    this.routeForm.get('route')?.valueChanges.subscribe((value: number) => {
      this.selectedRoute = this.orderedLineRoutes?.[value];
    });
  }

  isNationalRailInterchange(stop: StopPoint) {
    return stop.modes.some(x => x === 'national-rail');
  }
}
