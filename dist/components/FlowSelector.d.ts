import type { Flow, FlowRecommendation } from "../types";
interface FlowSelectorProps {
    isOpen: boolean;
    onClose: () => void;
    recommendations?: FlowRecommendation[];
    onFlowSelect: (flow: Flow) => void;
    isLoading: boolean;
}
export declare function FlowSelector({ isOpen, onClose, recommendations, onFlowSelect, isLoading, }: FlowSelectorProps): import("react").ReactPortal | null;
export {};
//# sourceMappingURL=FlowSelector.d.ts.map