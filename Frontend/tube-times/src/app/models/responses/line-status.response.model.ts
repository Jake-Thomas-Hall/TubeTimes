import { ValidityPeriod } from "./validity-period.response.model";

export interface LineStatus {
  id: number;
  statusSeverity: number;
  statusSeverityDescription: string;
  created: string;
  validityPeriods: ValidityPeriod[];
  lineId?: string;
  reason?: string;
}
