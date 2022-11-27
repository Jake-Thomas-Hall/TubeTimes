import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { fadeInOut } from 'src/app/animations/fade-in-out.animation';
import { fadeIn } from 'src/app/animations/fade-in.animation';
import { Line } from 'src/app/models/responses/lines.response.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  animations: [
    fadeIn,
    fadeInOut
  ]
})
export class NavigationComponent implements OnInit {
  searchResults: Line[] = [];
  searchForm: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private router: Router
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges
      .pipe(
        switchMap(sv => this.apiService.getLinesSearch({ search: sv }))
      )
      .subscribe((value: Line[]) => {
        this.searchResults = value;
      });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.closeSearch();
      }
    });
  }

  closeSearch() {
    this.searchResults = [];
    this.searchForm.patchValue({ search: '' }, { emitEvent: false });
  }
}
