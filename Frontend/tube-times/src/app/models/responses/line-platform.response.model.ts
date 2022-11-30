import { ArrivalPlatform } from "./arrival-platform.response.model";

export interface LinePlatform {
    lineId: string;
    lineName: string;
    arrivalPlatform: ArrivalPlatform[];
}
