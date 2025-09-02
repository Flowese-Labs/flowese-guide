// Material Design 3 inspired theme
// Following Material Design color system with semantic naming

export const theme = {
  colors: {
    // Primary colors (brand colors)
    primary: "#2563eb",
    onPrimary: "#ffffff",
    primaryContainer: "#dbeafe",
    onPrimaryContainer: "#1e40af",

    // Secondary colors
    secondary: "#64748b",
    onSecondary: "#ffffff",
    secondaryContainer: "#f1f5f9",
    onSecondaryContainer: "#334155",

    // Tertiary colors
    tertiary: "#7c3aed",
    onTertiary: "#ffffff",
    tertiaryContainer: "#ede9fe",
    onTertiaryContainer: "#5b21b6",

    // Error colors
    error: "#dc2626",
    onError: "#ffffff",
    errorContainer: "#fecaca",
    onErrorContainer: "#7f1d1d",

    // Success colors
    success: "#10b981",
    onSuccess: "#ffffff",
    successContainer: "#d1fae5",
    onSuccessContainer: "#064e3b",

    // Warning colors
    warning: "#f59e0b",
    onWarning: "#ffffff",
    warningContainer: "#fef3c7",
    onWarningContainer: "#78350f",

    // Surface colors
    surface: "#ffffff",
    onSurface: "#111827",
    surfaceVariant: "#f9fafb",
    onSurfaceVariant: "#6b7280",

    // Background colors
    background: "#ffffff",
    onBackground: "#111827",

    // Outline colors
    outline: "#e5e7eb",
    outlineVariant: "#d1d5db",

    // Inverse colors
    inverseSurface: "#111827",
    inverseOnSurface: "#ffffff",
    inversePrimary: "#93c5fd",

    // Disabled colors
    disabled: "#d1d5db",
    onDisabled: "#9ca3af",

    // Shadow colors
    shadow: "rgba(0, 0, 0, 0.1)",
    scrim: "rgba(0, 0, 0, 0.8)",
  },

  // Spacing scale (4px base unit following Material Design)
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },

  // Border radius
  borderRadius: {
    none: 0,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  // Typography scale
  typography: {
    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 32,
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
  },

  // Elevation (box-shadow)
  elevation: {
    none: "none",
    sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
    md: "0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)",
    "2xl": "0 25px 50px rgba(0, 0, 0, 0.25)",
  },

  // Animation
  animation: {
    duration: {
      fast: "150ms",
      normal: "200ms",
      slow: "300ms",
    },
    easing: {
      standard: "cubic-bezier(0.2, 0, 0, 1)",
      decelerate: "cubic-bezier(0, 0, 0, 1)",
      accelerate: "cubic-bezier(0.3, 0, 1, 1)",
    },
  },

  // Z-index scale
  zIndex: {
    dropdown: 1000,
    sticky: 1020,
    fixed: 1030,
    modal: 1040,
    popover: 1050,
    tooltip: 1060,
    overlay: 999999,
  },
} as const;

export type Theme = typeof theme;

// Default export
export default theme;
