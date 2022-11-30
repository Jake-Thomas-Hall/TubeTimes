import { StationMatch } from "./station-match.response.model";

export interface StationSearch {
  query: string;
  total: number;
  matches: StationMatch[];
}

