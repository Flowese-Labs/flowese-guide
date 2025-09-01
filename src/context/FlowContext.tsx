import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import type {
  OnboardingState,
  OnboardingAction,
  Flow,
  OnboardingGuideConfig,
} from "../types";
import { fetchFlows } from "../utils";

// Initial state
const initialState: OnboardingState = {
  isVisible: false,
  selectedFlow: null,
  currentStepIndex: 0,
  flows: [],
  isLoading: false,
  searchQuery: "",
  error: null,
};

// Reducer
function onboardingReducer(
  state: OnboardingState,
  action: OnboardingAction,
): OnboardingState {
  switch (action.type) {
    case "SET_VISIBLE":
      return { ...state, isVisible: action.payload };

    case "SET_FLOWS":
      return { ...state, flows: action.payload, isLoading: false };

    case "SET_LOADING":
      return { ...state, isLoading: action.payload };

    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };

    case "SELECT_FLOW":
      return {
        ...state,
        selectedFlow: action.payload,
        currentStepIndex: 0,
        isVisible: false, // Close the flow selection dialog
      };

    case "SET_CURRENT_STEP":
      return { ...state, currentStepIndex: action.payload };

    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };

    case "NEXT_STEP": {
      if (!state.selectedFlow) return state;
      const allSteps = Array.isArray(state.selectedFlow.steps)
        ? state.selectedFlow.steps
        : [];
      const nextIndex = state.currentStepIndex + 1;

      if (nextIndex < allSteps.length) {
        return { ...state, currentStepIndex: nextIndex };
      } else {
        // Flow completed
        return {
          ...state,
          isVisible: false,
          selectedFlow: null,
          currentStepIndex: 0,
        };
      }
    }

    case "PREVIOUS_STEP": {
      if (!state.selectedFlow) return state;
      const prevIndex = state.currentStepIndex - 1;

      if (prevIndex >= 0) {
        return { ...state, currentStepIndex: prevIndex };
      }
      return state;
    }

    case "RESET":
      return initialState;

    default:
      return state;
  }
}

// Context
const FlowContext = createContext<{
  state: OnboardingState;
  dispatch: React.Dispatch<OnboardingAction>;
  config: OnboardingGuideConfig;
} | null>(null);

// Provider component
export function FlowProvider({
  children,
  config,
}: {
  children: ReactNode;
  config: OnboardingGuideConfig;
}) {
  const [state, dispatch] = useReducer(onboardingReducer, initialState);

  // Fetch flows when the component mounts or applicationId changes
  useEffect(() => {
    const loadFlows = async () => {
      if (!config.applicationId) return;

      dispatch({ type: "SET_LOADING", payload: true });
      dispatch({ type: "SET_ERROR", payload: null });

      try {
        console.log("Fetching flows for applicationId:", config.applicationId);
        const flows = await fetchFlows(config.applicationId);
        console.log("Fetched flows:", flows);
        dispatch({ type: "SET_FLOWS", payload: flows });
      } catch (error) {
        const errorMessage =
          error instanceof Error ? error.message : "Failed to fetch flows";
        dispatch({ type: "SET_ERROR", payload: errorMessage });
      }
    };

    loadFlows();
  }, [config.applicationId]);

  return (
    <FlowContext.Provider value={{ state, dispatch, config }}>
      {children}
    </FlowContext.Provider>
  );
}

// Hook to use the context
export function useFlow() {
  const context = useContext(FlowContext);
  if (!context) {
    throw new Error("useFlow must be used within a FlowProvider");
  }
  return context;
}

// Helper functions
export function getCurrentActionStep(flow: Flow) {
  if (!Array.isArray(flow.steps) || flow.steps.length === 0) {
    return null;
  }

  return flow.steps[0]; // For now, just return the first step
}

export function getActionStepsCount(flow: Flow): number {
  if (!Array.isArray(flow.steps)) {
    return 0;
  }

  return flow.steps.length;
}

