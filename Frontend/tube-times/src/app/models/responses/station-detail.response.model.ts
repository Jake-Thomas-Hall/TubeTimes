import { LinePlatform } from "./line-platform.response.model";
import { Line } from "./lines.response.model";

export interface StationDetail {
  naptanId: string;
  modes: string[];
  hubNaptanCode: string;
  lines: Line[];
  id: string;
  commonName: string;
  linePlatforms: LinePlatform[];
}