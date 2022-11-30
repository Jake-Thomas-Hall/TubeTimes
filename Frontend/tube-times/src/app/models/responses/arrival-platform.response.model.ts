import { Arrival } from "./arrival.response.model";

export interface ArrivalPlatform {
    platformName: string;
    arrivals: Arrival[];
}
