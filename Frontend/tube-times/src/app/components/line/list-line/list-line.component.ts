import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { combineLatest, of, switchMap } from 'rxjs';
import { Line } from 'src/app/models/responses/lines.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-list-line',
  templateUrl: './list-line.component.html',
  styleUrls: ['./list-line.component.scss']
})
export class ListLineComponent implements OnInit {
  lines: Line[] = [];
  lineListForm: FormGroup;
  private unfilteredLines: Line[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.lineListForm = fb.group({
      search: [null],
      filter: [null]
    })
  }

  ngOnInit(): void {
    combineLatest([this.route.params, this.route.queryParams], (params, queryParams) => ({ ...params, ...queryParams })).subscribe(value => {
      this.apiService.getLineStatuses().subscribe(result => {
        this.unfilteredLines = result;
        this.lines = result;
      })
    });

    this.lineListForm.valueChanges
      .pipe(
        switchMap(sv => {
          return of(this.unfilteredLines);
        })
      )
      .subscribe(response => {
        console.log(response);

        // Filter by severity first
        if (this.lineListForm.get('filter')?.value) {
          let minimumSeverity = 10;
          switch (this.lineListForm.get('filter')?.value) {
            case 'Minor':
              minimumSeverity = 7
              break;
            case 'Severe':
              minimumSeverity = 6
              break;
            default:
              break;
          }
          console.log(minimumSeverity);
          this.lines = response.filter(x => x.lineStatuses.some(y => y.statusSeverity >= minimumSeverity));
        }

        // Filter remaining items by search string
        if (this.lineListForm.get('search')?.value && this.lineListForm.get('search')?.value !== '') {
          const regex = new RegExp(`(${this.lineListForm.get('search')?.value})`, 'gi');
          this.lines = this.lines.filter(x => regex.test(x.name));
        }
        else {
          this.lines = response;
        }
      })
  }

}
