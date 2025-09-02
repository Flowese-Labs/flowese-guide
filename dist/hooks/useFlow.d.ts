import type { Flow } from "../types";
export declare function useFlowGuide(): {
    config: import("..").OnboardingGuideConfig;
    showFlowSelection: () => void;
    hideFlowSelection: () => void;
    selectFlow: (flow: Flow) => void;
    nextStep: () => void;
    previousStep: () => void;
    setCurrentStep: (stepIndex: number) => void;
    dismissOnboarding: () => void;
    setSearchQuery: (query: string) => void;
    filteredFlows: Flow[];
    canGoNext: boolean;
    canGoPrevious: boolean;
    isFlowCompleted: boolean;
    getCurrentStep: () => import("..").FlowStep | null;
    getTotalSteps: () => number;
    isVisible: boolean;
    selectedFlow: Flow | null;
    currentStepIndex: number;
    flows: Flow[];
    isLoading: boolean;
    searchQuery: string;
    error: string | null;
};
//# sourceMappingURL=useFlow.d.ts.map