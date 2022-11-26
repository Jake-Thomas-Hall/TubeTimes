import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Line } from '../models/responses/lines.response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLineStatuses() {
    return this.http.get<Line[]>(`${environment.apiUrl}Line/Status`);
  }
}