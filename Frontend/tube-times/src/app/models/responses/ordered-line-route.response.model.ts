import { StopPoint } from "./stop-point.response.model";

export interface OrderedLineRoute {
    name: string;
    stopPoints: StopPoint[];
    serviceType: string;
}
