// Main exports for the flowese-guide package
export { FlowProvider } from "./components/FlowProvider";
export { Tooltip } from "./components/Tooltip";
export { FlowSelector } from "./components/FlowSelector";

// Context and hooks
export { useFlow } from "./context/FlowContext";
export { useFlowGuide } from "./hooks/useFlow";

// Types
export type {
  Flow,
  FlowStep,
  OnboardingState,
  OnboardingAction,
  OnboardingGuideConfig,
  FlowsApiResponse,
  TooltipPosition,
} from "./types";

// Utilities
export {
  getApiBaseUrl,
  fetchFlows,
  isElementInViewport,
  calculateTooltipPosition,
  getCurrentActionStep,
  getActionStepsCount,
  filterFlowsByType,
  sortFlowsByDate,
} from "./utils";

// Default export for easy importing
export { FlowProvider as default } from "./components/FlowProvider";
