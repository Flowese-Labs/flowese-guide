import type { Flow } from "../types/index.js";

export interface FlowRecommendation {
  flow: Flow;
  priority: "page-matched" | "other";
  isRecommended: boolean;
}

// Flow type priority order (highest to lowest)
const FLOW_TYPE_PRIORITY = {
  onboarding: 0,
  feature_tour: 1,
  training: 2,
  nudge: 3,
} as const;

export function getFlowRecommendations(
  flows: Flow[],
  currentPageUrl: string
): FlowRecommendation[] {
  // Separate page-matched and other flows
  const pageMatchedFlows: Flow[] = [];
  const otherFlows: Flow[] = [];

  flows.forEach((flow) => {
    const isPageMatched = flow.triggerUrls?.some(
      (url) => currentPageUrl === url || currentPageUrl.startsWith(url)
    );

    if (isPageMatched) {
      pageMatchedFlows.push(flow);
    } else {
      otherFlows.push(flow);
    }
  });

  // Sort both arrays by flow type priority
  const sortByType = (a: Flow, b: Flow) => {
    const priorityA =
      FLOW_TYPE_PRIORITY[a.type as keyof typeof FLOW_TYPE_PRIORITY] ?? 99;
    const priorityB =
      FLOW_TYPE_PRIORITY[b.type as keyof typeof FLOW_TYPE_PRIORITY] ?? 99;
    return priorityA - priorityB;
  };

  pageMatchedFlows.sort(sortByType);
  otherFlows.sort(sortByType);

  // Combine and mark first flow as recommended
  const allFlows = [...pageMatchedFlows, ...otherFlows];

  return allFlows.map((flow, index) => ({
    flow,
    priority: index < pageMatchedFlows.length ? "page-matched" : "other",
    isRecommended: index === 0, // First flow is always recommended
  }));
}
