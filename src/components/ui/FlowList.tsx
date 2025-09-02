/** @jsxImportSource @emotion/react */
import React from "react";
import theme from "../../theme";
import { Button } from "./Button";
import type { Flow, FlowRecommendation } from "../../types";

interface FlowListProps {
  recommendations?: FlowRecommendation[];
  onFlowSelect: (flow: Flow) => void;
}

export const FlowList: React.FC<FlowListProps> = ({
  recommendations,
  onFlowSelect,
}) => {
  const FlowItem: React.FC<{
    flow: Flow;
    isRecommended?: boolean;
    priority?: "page-matched" | "other";
  }> = ({ flow, isRecommended = false, priority = "other" }) => (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.outline}`,
        borderRadius: theme.borderRadius.lg,
        cursor: "pointer",
        transition: `all ${theme.animation.duration.normal}`,

        "&:hover": {
          backgroundColor: theme.colors.surfaceVariant,
          borderColor: theme.colors.primary,
          transform: "translateY(-1px)",
          boxShadow: theme.elevation.md,
        },
      }}
      onClick={() => onFlowSelect(flow)}
    >
      {/* Content */}
      <div css={{ flex: 1, minWidth: 0 }}>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: theme.spacing.sm,
            marginBottom: theme.spacing.xs,
          }}
        >
          <h3
            css={{
              fontSize: theme.typography.fontSize.lg,
              fontWeight: theme.typography.fontWeight.semibold,
              color: theme.colors.onSurface,
              margin: 0,
            }}
          >
            {flow.name}
          </h3>
          {/* Priority Badges */}
          {isRecommended && (
            <span
              css={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.onPrimary,
                fontSize: theme.typography.fontSize.xs,
                fontWeight: theme.typography.fontWeight.medium,
                padding: "2px 8px",
                borderRadius: theme.borderRadius.full,
              }}
            >
              Recommended
            </span>
          )}
          {priority === "page-matched" && !isRecommended && (
            <span
              css={{
                backgroundColor: theme.colors.secondary,
                color: theme.colors.onSecondary,
                fontSize: theme.typography.fontSize.xs,
                fontWeight: theme.typography.fontWeight.medium,
                padding: "2px 8px",
                borderRadius: theme.borderRadius.full,
              }}
            >
              Page Relevant
            </span>
          )}
        </div>

        {flow.description && (
          <p
            css={{
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.onSurfaceVariant,
              lineHeight: theme.typography.lineHeight.normal,
              margin: `0 0 ${theme.spacing.sm}px 0`,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical" as const,
              overflow: "hidden",
            }}
          >
            {flow.description}
          </p>
        )}

        {/* Meta info */}
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: theme.spacing.md,
            fontSize: theme.typography.fontSize.xs,
            color: theme.colors.onSurfaceVariant,
          }}
        >
          <span
            css={{
              display: "flex",
              alignItems: "center",
              gap: theme.spacing.xs,
            }}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12,6 12,12 16,14" />
            </svg>
            {flow.estimatedDurationMinutes || 2} minute
            {(flow.estimatedDurationMinutes || 2) !== 1 ? "s" : ""}
          </span>
          {Array.isArray(flow.steps) && flow.steps.length > 0 && (
            <span
              css={{
                display: "flex",
                alignItems: "center",
                gap: theme.spacing.xs,
              }}
            >
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <polyline points="9,9 9,15 15,15" />
              </svg>
              {flow.steps.length} step{flow.steps.length !== 1 ? "s" : ""}
            </span>
          )}
        </div>
      </div>

      {/* CTA */}
      <Button
        variant={isRecommended ? "primary" : "outline"}
        size="sm"
        css={{
          marginLeft: theme.spacing.lg,
          flexShrink: 0,
        }}
        onClick={(e) => {
          e.stopPropagation();
          onFlowSelect(flow);
        }}
      >
        Start
      </Button>
    </div>
  );

  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column" as const,
        gap: theme.spacing.lg,
        height: "100%", // Fill available space
        overflow: "auto",

        "&::-webkit-scrollbar": {
          width: 6,
        },
        "&::-webkit-scrollbar-track": {
          background: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "rgba(0, 0, 0, 0.1)",
          borderRadius: 3,
        },
      }}
    >
      {/* All Flows - Already Sorted by Recommendations */}
      {recommendations?.map((rec) => (
        <FlowItem
          key={rec.flow.id}
          flow={rec.flow}
          isRecommended={rec.isRecommended}
          priority={rec.priority}
        />
      ))}
    </div>
  );
};

FlowList.displayName = "FlowList";
