export interface Line {
  id: string;
  name: string;
  modeName: string;
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
}

export interface ValidityPeriod {
  fromDate: string;
  toDate: string;
  isNow: boolean;
}