export declare const buttonStyles: {
    readonly display: "inline-flex";
    readonly alignItems: "center";
    readonly justifyContent: "center";
    readonly whiteSpace: "nowrap";
    readonly borderRadius: 8;
    readonly fontSize: 14;
    readonly fontWeight: 500;
    readonly transition: "all 200ms cubic-bezier(0.2, 0, 0, 1)";
    readonly cursor: "pointer";
    readonly border: "none";
    readonly outline: "none";
    readonly fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", sans-serif";
    readonly '&:focus-visible': {
        readonly outline: "2px solid #2563eb";
        readonly outlineOffset: 2;
    };
    readonly '&:disabled': {
        readonly pointerEvents: "none";
        readonly opacity: 0.5;
    };
};
export declare const buttonVariants: {
    readonly primary: {
        readonly background: "#2563eb";
        readonly color: "#ffffff";
        readonly '&:hover:not(:disabled)': {
            readonly background: "#1e40af";
        };
    };
    readonly outline: {
        readonly background: "transparent";
        readonly border: "1px solid #e5e7eb";
        readonly color: "#111827";
        readonly '&:hover:not(:disabled)': {
            readonly background: "#f9fafb";
            readonly borderColor: "#d1d5db";
        };
    };
    readonly ghost: {
        readonly background: "transparent";
        readonly color: "#111827";
        readonly '&:hover:not(:disabled)': {
            readonly background: "#f9fafb";
        };
    };
};
export declare const buttonSizes: {
    readonly sm: {
        readonly height: 32;
        readonly padding: "0 16px";
        readonly fontSize: 12;
    };
    readonly default: {
        readonly height: 40;
        readonly padding: "0 24px";
    };
};
export declare const inputStyles: {
    readonly display: "flex";
    readonly width: "100%";
    readonly borderRadius: 8;
    readonly border: "1px solid #e5e7eb";
    readonly background: "#ffffff";
    readonly padding: "8px 16px";
    readonly fontSize: 14;
    readonly transition: "all 200ms";
    readonly fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", sans-serif";
    readonly outline: "none";
    readonly color: "#111827";
    readonly '&:focus': {
        readonly borderColor: "#2563eb";
        readonly boxShadow: "0 0 0 2px #dbeafe";
    };
    readonly '&::placeholder': {
        readonly color: "#6b7280";
    };
};
export declare const badgeStyles: {
    readonly display: "inline-flex";
    readonly alignItems: "center";
    readonly borderRadius: 9999;
    readonly padding: `${number}px 8px`;
    readonly fontSize: 12;
    readonly fontWeight: 500;
    readonly transition: "all 200ms";
    readonly fontFamily: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", sans-serif";
};
export declare const badgeVariants: {
    readonly default: {
        readonly background: "#f9fafb";
        readonly color: "#6b7280";
    };
    readonly outline: {
        readonly background: "transparent";
        readonly border: "1px solid #e5e7eb";
        readonly color: "#111827";
    };
    readonly secondary: {
        readonly background: "#f1f5f9";
        readonly color: "#334155";
    };
};
export declare const dialogOverlayStyles: {
    readonly position: "fixed";
    readonly inset: 0;
    readonly zIndex: 1040;
    readonly background: "rgba(0, 0, 0, 0.8)";
    readonly backdropFilter: "blur(8px)";
    readonly display: "flex";
    readonly alignItems: "center";
    readonly justifyContent: "center";
    readonly padding: 16;
};
export declare const dialogContentStyles: {
    readonly position: "relative";
    readonly background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)";
    readonly borderRadius: 16;
    readonly boxShadow: "0 25px 50px rgba(0, 0, 0, 0.25)";
    readonly width: "100%";
    readonly maxHeight: "85vh";
    readonly overflow: "hidden";
    readonly display: "flex";
    readonly flexDirection: "column";
    readonly backdropFilter: "blur(20px)";
    readonly border: "1px solid #e5e7eb";
};
export declare const dialogHeaderStyles: {
    readonly padding: "32px 32px 24px";
    readonly flexShrink: 0;
    readonly background: "linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)";
    readonly position: "relative";
    readonly overflow: "hidden";
    readonly '&::before': {
        readonly content: "''";
        readonly position: "absolute";
        readonly top: 0;
        readonly left: 0;
        readonly right: 0;
        readonly bottom: 0;
        readonly background: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") repeat";
        readonly opacity: 0.3;
    };
};
export declare const dialogTitleStyles: {
    readonly fontSize: 24;
    readonly fontWeight: 700;
    readonly lineHeight: 1.2;
    readonly color: "#ffffff";
    readonly margin: "0 0 16px 0";
    readonly display: "flex";
    readonly alignItems: "center";
    readonly gap: 16;
    readonly position: "relative";
    readonly zIndex: 1;
    readonly textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)";
    readonly svg: {
        readonly width: 28;
        readonly height: 28;
        readonly filter: "drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))";
    };
};
export declare const dialogDescriptionStyles: {
    readonly fontSize: 16;
    readonly color: "#ffffff";
    readonly opacity: 0.9;
    readonly margin: 0;
    readonly lineHeight: 1.5;
    readonly position: "relative";
    readonly zIndex: 1;
    readonly textShadow: "0 1px 2px rgba(0, 0, 0, 0.1)";
};
export declare const skeletonStyles: {
    readonly background: "linear-gradient(90deg, #f9fafb 25%, #e5e7eb 50%, #f9fafb 75%)";
    readonly backgroundSize: "200% 100%";
    readonly animation: "loading 1.5s infinite";
    readonly borderRadius: 4;
    readonly '@keyframes loading': {
        readonly '0%': {
            readonly backgroundPosition: "200% 0";
        };
        readonly '100%': {
            readonly backgroundPosition: "-200% 0";
        };
    };
};
export declare const flexBetween: {
    readonly display: "flex";
    readonly alignItems: "center";
    readonly justifyContent: "space-between";
};
//# sourceMappingURL=shared-styles.d.ts.map