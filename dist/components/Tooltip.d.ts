import type { FlowStep } from "../types";
interface TooltipProps {
    step: FlowStep;
    onNext: () => void;
    onPrevious: () => void;
    onDismiss: () => void;
    canGoNext: boolean;
    canGoPrevious: boolean;
    currentStepIndex: number;
    totalSteps: number;
}
export declare function Tooltip({ step, onNext, onPrevious, onDismiss, canGoNext, canGoPrevious, currentStepIndex, totalSteps, }: TooltipProps): import("@emotion/react/jsx-runtime").JSX.Element | null;
export {};
//# sourceMappingURL=Tooltip.d.ts.map