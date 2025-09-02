/** @jsxImportSource @emotion/react */
import theme from "../theme";

// Base button styles
export const buttonStyles = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  whiteSpace: "nowrap" as const,
  borderRadius: theme.borderRadius.md,
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
  cursor: "pointer",
  border: "none",
  outline: "none",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',

  "&:focus-visible": {
    outline: `2px solid ${theme.colors.primary}`,
    outlineOffset: 2,
  },

  "&:disabled": {
    pointerEvents: "none" as const,
    opacity: 0.5,
  },
} as const;

export const buttonVariants = {
  primary: {
    background: theme.colors.primary,
    color: theme.colors.onPrimary,

    "&:hover:not(:disabled)": {
      background: theme.colors.onPrimaryContainer,
    },
  },
  outline: {
    background: "transparent",
    border: `1px solid ${theme.colors.outline}`,
    color: theme.colors.onSurface,

    "&:hover:not(:disabled)": {
      background: theme.colors.surfaceVariant,
      borderColor: theme.colors.outlineVariant,
    },
  },
  ghost: {
    background: "transparent",
    color: theme.colors.onSurface,

    "&:hover:not(:disabled)": {
      background: theme.colors.surfaceVariant,
    },
  },
} as const;

export const buttonSizes = {
  sm: {
    height: 32,
    padding: `0 ${theme.spacing.md}px`,
    fontSize: theme.typography.fontSize.xs,
  },
  default: {
    height: 40,
    padding: `0 ${theme.spacing.lg}px`,
  },
} as const;

// Input styles
export const inputStyles = {
  display: "flex",
  width: "100%",
  borderRadius: theme.borderRadius.md,
  border: `1px solid ${theme.colors.outline}`,
  background: theme.colors.surface,
  padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
  fontSize: theme.typography.fontSize.sm,
  transition: `all ${theme.animation.duration.normal}`,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  outline: "none",
  color: theme.colors.onSurface,

  "&:focus": {
    borderColor: theme.colors.primary,
    boxShadow: `0 0 0 2px ${theme.colors.primaryContainer}`,
  },

  "&::placeholder": {
    color: theme.colors.onSurfaceVariant,
  },
} as const;

// Badge styles
export const badgeStyles = {
  display: "inline-flex",
  alignItems: "center",
  borderRadius: theme.borderRadius.full,
  padding: `${theme.spacing.xs / 2}px ${theme.spacing.sm}px`,
  fontSize: theme.typography.fontSize.xs,
  fontWeight: theme.typography.fontWeight.medium,
  transition: `all ${theme.animation.duration.normal}`,
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
} as const;

export const badgeVariants = {
  default: {
    background: theme.colors.surfaceVariant,
    color: theme.colors.onSurfaceVariant,
  },
  outline: {
    background: "transparent",
    border: `1px solid ${theme.colors.outline}`,
    color: theme.colors.onSurface,
  },
  secondary: {
    background: theme.colors.secondaryContainer,
    color: theme.colors.onSecondaryContainer,
  },
} as const;

// Dialog styles
export const dialogOverlayStyles = {
  position: "fixed" as const,
  inset: 0,
  zIndex: theme.zIndex.modal,
  background: theme.colors.scrim,
  backdropFilter: "blur(8px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing.md,
} as const;

export const dialogContentStyles = {
  position: "relative" as const,
  background: `linear-gradient(135deg, ${theme.colors.surface} 0%, ${theme.colors.surfaceVariant} 100%)`,
  borderRadius: theme.borderRadius.xl,
  boxShadow: theme.elevation["2xl"],
  width: "100%",
  maxHeight: "85vh",
  overflow: "hidden" as const,
  display: "flex",
  flexDirection: "column" as const,
  backdropFilter: "blur(20px)",
  border: `1px solid ${theme.colors.outline}`,
} as const;

export const dialogHeaderStyles = {
  padding: `${theme.spacing.xl}px ${theme.spacing.xl}px ${theme.spacing.lg}px`,
  flexShrink: 0,
  background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.tertiary} 100%)`,
  position: "relative" as const,
  overflow: "hidden" as const,

  "&::before": {
    content: "''",
    position: "absolute" as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='12' cy='12' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\") repeat",
    opacity: 0.3,
  },
} as const;

export const dialogTitleStyles = {
  fontSize: theme.typography.fontSize["2xl"],
  fontWeight: theme.typography.fontWeight.bold,
  lineHeight: theme.typography.lineHeight.tight,
  color: theme.colors.onPrimary,
  margin: `0 0 ${theme.spacing.md}px 0`,
  display: "flex",
  alignItems: "center",
  gap: theme.spacing.md,
  position: "relative" as const,
  zIndex: 1,
  textShadow: `0 2px 4px ${theme.colors.shadow}`,

  svg: {
    width: 28,
    height: 28,
    filter: `drop-shadow(0 2px 4px ${theme.colors.shadow})`,
  },
} as const;

export const dialogDescriptionStyles = {
  fontSize: theme.typography.fontSize.base,
  color: theme.colors.onPrimary,
  opacity: 0.9,
  margin: 0,
  lineHeight: theme.typography.lineHeight.normal,
  position: "relative" as const,
  zIndex: 1,
  textShadow: `0 1px 2px ${theme.colors.shadow}`,
} as const;

// Skeleton styles
export const skeletonStyles = {
  background: `linear-gradient(90deg, ${theme.colors.surfaceVariant} 25%, ${theme.colors.outline} 50%, ${theme.colors.surfaceVariant} 75%)`,
  backgroundSize: "200% 100%",
  animation: "loading 1.5s infinite",
  borderRadius: theme.borderRadius.sm,

  "@keyframes loading": {
    "0%": {
      backgroundPosition: "200% 0",
    },
    "100%": {
      backgroundPosition: "-200% 0",
    },
  },
} as const;

export const flexBetween = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
} as const;
