import { useCallback } from "react";
import { useFlow } from "../context/FlowContext";
import type { Flow } from "../types";

export function useFlowGuide() {
  const { state, dispatch, config } = useFlow();

  const showFlowSelection = useCallback(() => {
    dispatch({ type: "SET_VISIBLE", payload: true });
  }, [dispatch]);

  const hideFlowSelection = useCallback(() => {
    dispatch({ type: "SET_VISIBLE", payload: false });
  }, [dispatch]);

  const selectFlow = useCallback(
    (flow: Flow) => {
      dispatch({ type: "SELECT_FLOW", payload: flow });
    },
    [dispatch]
  );

  const nextStep = useCallback(() => {
    dispatch({ type: "NEXT_STEP" });
  }, [dispatch]);

  const previousStep = useCallback(() => {
    dispatch({ type: "PREVIOUS_STEP" });
  }, [dispatch]);

  const setCurrentStep = useCallback(
    (stepIndex: number) => {
      dispatch({ type: "SET_CURRENT_STEP", payload: stepIndex });
    },
    [dispatch]
  );

  const dismissOnboarding = useCallback(() => {
    dispatch({ type: "RESET" });
  }, [dispatch]);

  const setSearchQuery = useCallback(
    (query: string) => {
      dispatch({ type: "SET_SEARCH_QUERY", payload: query });
    },
    [dispatch]
  );

  const filteredFlows = useCallback(() => {
    if (!state.searchQuery) return state.flows;

    return state.flows.filter(
      (flow) =>
        flow.name.toLowerCase().includes(state.searchQuery.toLowerCase()) ||
        flow.description
          ?.toLowerCase()
          .includes(state.searchQuery.toLowerCase())
    );
  }, [state.flows, state.searchQuery]);

  const canGoNext = useCallback(() => {
    if (!state.selectedFlow || !Array.isArray(state.selectedFlow.steps)) {
      return false;
    }
    return state.currentStepIndex < state.selectedFlow.steps.length - 1;
  }, [state.selectedFlow, state.currentStepIndex]);

  const canGoPrevious = useCallback(() => {
    return state.currentStepIndex > 0;
  }, [state.currentStepIndex]);

  const isFlowCompleted = useCallback(() => {
    if (!state.selectedFlow || !Array.isArray(state.selectedFlow.steps)) {
      return false;
    }
    return state.currentStepIndex >= state.selectedFlow.steps.length - 1;
  }, [state.selectedFlow, state.currentStepIndex]);

  return {
    // State
    ...state,

    // Configuration
    config,

    // Actions
    showFlowSelection,
    hideFlowSelection,
    selectFlow,
    nextStep,
    previousStep,
    setCurrentStep,
    dismissOnboarding,
    setSearchQuery,

    // Computed values
    filteredFlows: filteredFlows(),
    canGoNext: canGoNext(),
    canGoPrevious: canGoPrevious(),
    isFlowCompleted: isFlowCompleted(),

    // Helper functions
    getCurrentStep: () => {
      if (!state.selectedFlow || !Array.isArray(state.selectedFlow.steps)) {
        return null;
      }
      return state.selectedFlow.steps[state.currentStepIndex];
    },

    getTotalSteps: () => {
      if (!state.selectedFlow || !Array.isArray(state.selectedFlow.steps)) {
        return 0;
      }
      return state.selectedFlow.steps.length;
    },
  };
}