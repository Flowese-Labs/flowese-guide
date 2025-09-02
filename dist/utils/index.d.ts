import type { Flow, TooltipPosition } from "../types";
export { getFlowRecommendations, type FlowRecommendation, } from "./flowRecommendations.js";
export { getFlowsForQuery } from "./flowSearch.js";
export declare function getApiBaseUrl(): string;
export declare function fetchFlows(applicationId: string): Promise<Flow[]>;
export declare function isElementInViewport(element: HTMLElement): boolean;
export declare function calculateTooltipPosition(element: HTMLElement, tooltipWidth?: number, tooltipHeight?: number): TooltipPosition;
//# sourceMappingURL=index.d.ts.map