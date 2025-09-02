interface FlowProviderProps {
    applicationId: string;
    baseUrl?: string;
    onFlowComplete?: (flowId: string) => void;
    onStepComplete?: (stepId: string) => void;
}
export declare function FlowProvider({ applicationId, baseUrl: _baseUrl, onFlowComplete, onStepComplete, }: FlowProviderProps): import("@emotion/react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=FlowProvider.d.ts.map