import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LineRoute } from '../models/responses/line-route.response.model';
import { Line } from '../models/responses/lines.response.model';
import { StationDetail } from '../models/responses/station-detail.response.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getLinesSearch(params: {[x: string]: any;}) {
    return this.http.get<Line[]>(`${environment.apiUrl}Line`, { params: params })
  }

  getLineStatuses() {
    return this.http.get<Line[]>(`${environment.apiUrl}Line/Status`);
  }

  getLineRoute(params: {[x: string]: any;}) {
    return this.http.get<LineRoute>(`${environment.apiUrl}Line/${params['line']}/Route/Sequence/${params['direction']}`);
  }

  getStationDetail(params: {[x: string]: any;}) {
    return this.http.get<StationDetail>(`${environment.apiUrl}Station/${params['station']}`);
  }
}
