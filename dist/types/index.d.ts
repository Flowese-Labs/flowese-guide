export interface FlowStep {
    id: string;
    order: number;
    stepType: string;
    title: string;
    content?: string;
    targetElement?: string;
    position?: string | Record<string, unknown>;
    actions?: Record<string, unknown>;
    conditions?: Record<string, unknown>;
    navigationHint?: string;
}
export interface Flow {
    id: string;
    name: string;
    description?: string;
    type: string;
    status: string;
    steps: FlowStep[] | number;
    estimatedDurationMinutes?: number;
    createdAt: string;
    updatedAt: string;
    applicationId?: string;
    application?: {
        name: string;
    } | null;
    triggerConditions?: string;
    triggerUrls?: string[];
    context?: string;
}
export interface FlowRecommendation {
    flow: Flow;
    priority: "page-matched" | "other";
    isRecommended: boolean;
}
export interface OnboardingState {
    isVisible: boolean;
    selectedFlow: Flow | null;
    currentStepIndex: number;
    flows: Flow[];
    isLoading: boolean;
    searchQuery: string;
    error: string | null;
}
export type OnboardingAction = {
    type: "SET_VISIBLE";
    payload: boolean;
} | {
    type: "SET_FLOWS";
    payload: Flow[];
} | {
    type: "SET_LOADING";
    payload: boolean;
} | {
    type: "SET_ERROR";
    payload: string | null;
} | {
    type: "SELECT_FLOW";
    payload: Flow;
} | {
    type: "SET_CURRENT_STEP";
    payload: number;
} | {
    type: "SET_SEARCH_QUERY";
    payload: string;
} | {
    type: "NEXT_STEP";
} | {
    type: "PREVIOUS_STEP";
} | {
    type: "RESET";
};
export interface OnboardingGuideConfig {
    applicationId: string;
    baseUrl?: string;
    onFlowComplete?: (flowId: string) => void;
    onStepComplete?: (stepId: string) => void;
}
export interface FlowsApiResponse {
    success: boolean;
    flows?: Flow[];
    error?: string;
}
export interface TooltipPosition {
    top: number;
    left: number;
    placement: "top" | "bottom" | "left" | "right";
}
//# sourceMappingURL=index.d.ts.map