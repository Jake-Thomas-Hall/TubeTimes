import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  apiCallSuccess: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let apiUrl = environment.apiUrl

    this.http.get(`${environment.apiUrl}WeatherForecast`).subscribe(response => {
      this.apiCallSuccess = true;
    });
  }

}
