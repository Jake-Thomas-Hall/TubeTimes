import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, of, Subject, switchMap } from 'rxjs';
import { fadeInStaggerAlt } from 'src/app/animations/fade-in-stagger.animation';
import { StationSearch } from 'src/app/models/responses/station-search.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-station-search',
  templateUrl: './station-search.component.html',
  styleUrls: ['./station-search.component.scss'],
  animations: [
    fadeInStaggerAlt
  ]
})
export class StationSearchComponent implements OnInit {
  stationSearchForm: FormGroup;
  searchResult$: BehaviorSubject<StationSearch> = new BehaviorSubject<StationSearch>({ query: '', total: 0, matches: [] });

  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.stationSearchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit(): void {
    this.stationSearchForm.patchValue(this.route.snapshot.queryParams, { emitEvent: false });

    this.route.queryParams
      .pipe(switchMap(sv => {
        // Only perform query if there is actually some value provided, return empty observable result otherwise.
        if (!sv['query']) {
          return of({ query: '', total: 0, matches: [] });
        }

        if (sv['query'].trim() === '') {
          return of({ query: '', total: 0, matches: [] });
        }

        return this.apiService.getStationSearch(sv);
      })).subscribe(result => {
        this.searchResult$.next(result);
      });

    this.stationSearchForm.valueChanges.subscribe((value: Object) => {
      value = value.removeEmptyProperties();
      this.router.navigate([], { queryParams: value })
    });
  }
}
