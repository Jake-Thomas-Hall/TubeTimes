import { LineStatus } from "./line-status.response.model";
import { ServiceType } from "./service-type.response.model";

export interface Line {
  id: string;
  name: string;
  modeName: string;
  routeType: string;
  status: string;
  created: string;
  modified: string;
  lineStatuses: LineStatus[];
  serviceTypes: ServiceType[];
}