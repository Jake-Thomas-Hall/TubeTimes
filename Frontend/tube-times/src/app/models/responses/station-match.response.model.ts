
export interface StationMatch {
    icsId: string;
    modes: string[];
    zone: string;
    id: string;
    name: string;
    lat: number;
    lon: number;
    topMostParentId?: string;
}
