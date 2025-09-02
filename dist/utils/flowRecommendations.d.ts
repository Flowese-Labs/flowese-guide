import type { Flow } from "../types/index.js";
export interface FlowRecommendation {
    flow: Flow;
    priority: "page-matched" | "other";
    isRecommended: boolean;
}
export declare function getFlowRecommendations(flows: Flow[], currentPageUrl: string): FlowRecommendation[];
//# sourceMappingURL=flowRecommendations.d.ts.map