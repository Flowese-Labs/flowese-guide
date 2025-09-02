import type { FlowRecommendation } from "../types/index.js";

/**
 * Basic context-based flow search
 * Searches through flow name, description, context, and type
 */
export function getFlowsForQuery(
  flows: FlowRecommendation[],
  query: string
): FlowRecommendation[] {
  if (!query.trim()) {
    return flows; // Return all flows if no query
  }

  const searchTerm = query.toLowerCase().trim();

  const results = flows.filter((rec) => {
    const flow = rec.flow;

    // Search in multiple fields with priority
    const nameMatch = flow.name.toLowerCase().includes(searchTerm);
    const descriptionMatch = flow.description
      ?.toLowerCase()
      .includes(searchTerm);
    const contextMatch = flow.context?.toLowerCase().includes(searchTerm);
    const typeMatch = flow.type.toLowerCase().includes(searchTerm);

    // Return true if any field matches
    return nameMatch || descriptionMatch || contextMatch || typeMatch;
  });

  return results;
}
