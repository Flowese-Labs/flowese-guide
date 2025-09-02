export declare const theme: {
    readonly colors: {
        readonly primary: "#2563eb";
        readonly onPrimary: "#ffffff";
        readonly primaryContainer: "#dbeafe";
        readonly onPrimaryContainer: "#1e40af";
        readonly secondary: "#64748b";
        readonly onSecondary: "#ffffff";
        readonly secondaryContainer: "#f1f5f9";
        readonly onSecondaryContainer: "#334155";
        readonly tertiary: "#7c3aed";
        readonly onTertiary: "#ffffff";
        readonly tertiaryContainer: "#ede9fe";
        readonly onTertiaryContainer: "#5b21b6";
        readonly error: "#dc2626";
        readonly onError: "#ffffff";
        readonly errorContainer: "#fecaca";
        readonly onErrorContainer: "#7f1d1d";
        readonly success: "#10b981";
        readonly onSuccess: "#ffffff";
        readonly successContainer: "#d1fae5";
        readonly onSuccessContainer: "#064e3b";
        readonly warning: "#f59e0b";
        readonly onWarning: "#ffffff";
        readonly warningContainer: "#fef3c7";
        readonly onWarningContainer: "#78350f";
        readonly surface: "#ffffff";
        readonly onSurface: "#111827";
        readonly surfaceVariant: "#f9fafb";
        readonly onSurfaceVariant: "#6b7280";
        readonly background: "#ffffff";
        readonly onBackground: "#111827";
        readonly outline: "#e5e7eb";
        readonly outlineVariant: "#d1d5db";
        readonly inverseSurface: "#111827";
        readonly inverseOnSurface: "#ffffff";
        readonly inversePrimary: "#93c5fd";
        readonly disabled: "#d1d5db";
        readonly onDisabled: "#9ca3af";
        readonly shadow: "rgba(0, 0, 0, 0.1)";
        readonly scrim: "rgba(0, 0, 0, 0.8)";
    };
    readonly spacing: {
        readonly xs: 4;
        readonly sm: 8;
        readonly md: 16;
        readonly lg: 24;
        readonly xl: 32;
        readonly xxl: 48;
    };
    readonly borderRadius: {
        readonly none: 0;
        readonly sm: 4;
        readonly md: 8;
        readonly lg: 12;
        readonly xl: 16;
        readonly full: 9999;
    };
    readonly typography: {
        readonly fontSize: {
            readonly xs: 12;
            readonly sm: 14;
            readonly base: 16;
            readonly lg: 18;
            readonly xl: 20;
            readonly "2xl": 24;
            readonly "3xl": 32;
        };
        readonly fontWeight: {
            readonly normal: 400;
            readonly medium: 500;
            readonly semibold: 600;
            readonly bold: 700;
        };
        readonly lineHeight: {
            readonly tight: 1.2;
            readonly normal: 1.5;
            readonly relaxed: 1.75;
        };
    };
    readonly elevation: {
        readonly none: "none";
        readonly sm: "0 1px 2px rgba(0, 0, 0, 0.05)";
        readonly md: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)";
        readonly lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)";
        readonly xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)";
        readonly "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)";
    };
    readonly animation: {
        readonly duration: {
            readonly fast: "150ms";
            readonly normal: "200ms";
            readonly slow: "300ms";
        };
        readonly easing: {
            readonly standard: "cubic-bezier(0.2, 0, 0, 1)";
            readonly decelerate: "cubic-bezier(0, 0, 0, 1)";
            readonly accelerate: "cubic-bezier(0.3, 0, 1, 1)";
        };
    };
    readonly zIndex: {
        readonly dropdown: 1000;
        readonly sticky: 1020;
        readonly fixed: 1030;
        readonly modal: 1040;
        readonly popover: 1050;
        readonly tooltip: 1060;
        readonly overlay: 999999;
    };
};
export type Theme = typeof theme;
export default theme;
//# sourceMappingURL=theme.d.ts.map