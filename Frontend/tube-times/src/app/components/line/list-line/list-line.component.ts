import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { fadeInOutStagger } from 'src/app/animations/fade-in-out-stagger.animation';
import { hideOnExit } from 'src/app/animations/hide-on-exit.animation';
import { Line } from 'src/app/models/responses/lines.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-line',
  templateUrl: './list-line.component.html',
  styleUrls: ['./list-line.component.scss'],
  animations: [
    fadeInOutStagger,
    hideOnExit
  ]
})
export class ListLineComponent implements OnInit {
  lines: Line[] = [];
  lineListForm: FormGroup;
  private unfilteredLines: Line[] = [];

  constructor(
    private apiService: ApiService,
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.lineListForm = this.fb.group({
      search: [''],
      filter: ['']
    })
  }
  

  ngOnInit(): void {
    this.lineListForm.patchValue(this.route.snapshot.queryParams);

    this.apiService.getLineStatuses().subscribe(result => {
      this.unfilteredLines = result;
      this.lines = result;

      // Only subscribe to query params in case of successful query
      this.route.queryParams
      .pipe(switchMap(sv => {
          return of(sv);
      }))
      .subscribe(params => {
        // Filter by severity first
        let resultingLines = this.unfilteredLines;

        if (params['filter']) {
          let filterValue = this.lineListForm.get('filter')?.value
          switch (filterValue) {
            case 'Good':
              resultingLines = resultingLines.filter(x => x.lineStatuses.some(y => y.statusSeverity >= 10));
              break;
            case 'Minor':
              resultingLines = resultingLines.filter(x => x.lineStatuses.some(y => y.statusSeverity <= 9 && y.statusSeverity >= 7));
              break;
            case 'Severe':
              resultingLines = resultingLines.filter(x => x.lineStatuses.some(y => y.statusSeverity < 7));
              break;
            default:
              break;
          }
        }

        // Filter remaining items by search string
        if (params['search'] && params['search'] !== '') {
          const regex = new RegExp(`(${this.lineListForm.get('search')?.value})`, 'gi');
          resultingLines = resultingLines.filter(x => regex.test(x.name));
        }

        this.lines = resultingLines;
      });
    });

    this.lineListForm.valueChanges.subscribe((value: Object) => {
      value = value.removeEmptyProperties();
      this.router.navigate([], { queryParams: value});
    });
  }
}
