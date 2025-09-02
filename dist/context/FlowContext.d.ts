import { ReactNode } from "react";
import type { OnboardingState, OnboardingAction, OnboardingGuideConfig } from "../types";
export declare function FlowProvider({ children, config, }: {
    children: ReactNode;
    config: OnboardingGuideConfig;
}): import("@emotion/react/jsx-runtime").JSX.Element;
export declare function useFlow(): {
    state: OnboardingState;
    dispatch: React.Dispatch<OnboardingAction>;
    config: OnboardingGuideConfig;
};
//# sourceMappingURL=FlowContext.d.ts.map