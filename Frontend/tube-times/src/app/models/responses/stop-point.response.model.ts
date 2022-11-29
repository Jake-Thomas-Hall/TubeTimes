import { Line } from "./lines.response.model";

export interface StopPoint {
    parentId?: string;
    stationId: string;
    icsId: string;
    topMostParentId: string;
    modes: string[];
    stopType: string;
    zone?: string | string;
    lines: Line[];
    status: boolean;
    id: string;
    name: string;
    lat: number;
    lon: number;
    hasDisruption?: boolean | null;
    isInterchange: boolean;
}
