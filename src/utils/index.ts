import type { Flow, FlowStep, TooltipPosition } from "../types";

// Get the base API URL from environment or fallback
export function getApiBaseUrl(): string {
  // In development, use the current origin (localhost)
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "localhost"
  ) {
    return window.location.origin;
  }

  return (
    (import.meta as any).env?.VITE_FLOWESE_API_URL || "http://app.flowese.io"
  );
}

// Fetch flows for a specific application
export async function fetchFlows(applicationId: string): Promise<Flow[]> {
  try {
    const baseUrl = getApiBaseUrl();
    const response = await fetch(
      `${baseUrl}/api/flows?applicationId=${applicationId}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.success && data.flows) {
      // Filter to only show active flows
      return data.flows.filter((flow: Flow) => flow.status === "active");
    } else {
      throw new Error(data.error || "Failed to fetch flows");
    }
  } catch (error) {
    console.error("Error fetching flows:", error);
    throw error;
  }
}

// Check if element is in viewport
export function isElementInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Calculate optimal tooltip position
export function calculateTooltipPosition(
  element: HTMLElement,
  tooltipWidth: number = 300,
  tooltipHeight: number = 200
): TooltipPosition {
  const rect = element.getBoundingClientRect();

  // Check available space in each direction
  const spaceBelow = window.innerHeight - rect.bottom;
  const spaceAbove = rect.top;
  const spaceRight = window.innerWidth - rect.left;

  // Try to use the specified position from the step first
  // For now, default to bottom placement
  if (spaceBelow >= tooltipHeight + 20) {
    return {
      top: rect.bottom + 10,
      left: rect.left + rect.width / 2 - tooltipWidth / 2,
      placement: "bottom",
    };
  } else if (spaceAbove >= tooltipHeight + 20) {
    return {
      top: rect.top - tooltipHeight - 10,
      left: rect.left + rect.width / 2 - tooltipWidth / 2,
      placement: "top",
    };
  } else if (spaceRight >= tooltipWidth + 20) {
    return {
      top: rect.top + rect.height / 2 - tooltipHeight / 2,
      left: rect.right + 10,
      placement: "right",
    };
  } else {
    return {
      top: rect.top + rect.height / 2 - tooltipHeight / 2,
      left: rect.left - tooltipWidth - 10,
      placement: "left",
    };
  }
}

// Get current action step from flow
export function getCurrentActionStep(flow: Flow): FlowStep | null {
  if (!Array.isArray(flow.steps) || flow.steps.length === 0) {
    return null;
  }

  return flow.steps[0]; // For now, just return the first step
}

// Get action steps count
export function getActionStepsCount(flow: Flow): number {
  if (!Array.isArray(flow.steps)) {
    return 0;
  }

  return flow.steps.length;
}

// Filter flows by type
export function filterFlowsByType(flows: Flow[], type: string): Flow[] {
  return flows.filter((flow) => flow.type === type);
}

// Sort flows by creation date
export function sortFlowsByDate(
  flows: Flow[],
  ascending: boolean = false
): Flow[] {
  return [...flows].sort((a, b) => {
    const dateA = new Date(a.createdAt).getTime();
    const dateB = new Date(b.createdAt).getTime();
    return ascending ? dateA - dateB : dateB - dateA;
  });
}
