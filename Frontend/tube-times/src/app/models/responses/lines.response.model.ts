export interface Line {
  id: string;
  name: string;
  modeName: string;
  disruptions: any[];
  created: string;
  modified: string;
  lineStatuses: LineStatus[];
  serviceTypes: ServiceType[];
}

export interface ServiceType {
  name: string;
  uri: string;
}

export interface LineStatus {
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  created: string;
  validityPeriods: ValidityPeriod[];
  lineId?: string;
  reason?: string;
  disruption?: Disruption;
}

export interface Disruption {
  category: string;
  categoryDescription: string;
  description: string;
  affectedRoutes: any[];
  affectedStops: any[];
  closureText: string;
}

export interface ValidityPeriod {
  fromDate: string;
  toDate: string;
  isNow: boolean;
}