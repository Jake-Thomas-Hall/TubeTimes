import { OrderedLineRoute } from "./ordered-line-route.response.model";

export interface LineRoute {
  lineId: string;
  lineName: string;
  direction: string;
  isOutboundOnly: boolean;
  mode: string;
  orderedLineRoutes: OrderedLineRoute[];
}
