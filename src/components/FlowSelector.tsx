/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
import type { Flow, FlowRecommendation } from "../types";
import { getApiBaseUrl, getFlowsForQuery } from "../utils";
import { Button } from "./ui/Button";
import { FlowList } from "./ui/FlowList";
import { Search, Bot, X } from "./icons";
import theme from "../theme";

import {
  dialogOverlayStyles,
  dialogContentStyles,
  dialogHeaderStyles,
  dialogTitleStyles,
  dialogDescriptionStyles,
  skeletonStyles,
} from "./shared-styles";

interface FlowSelectorProps {
  isOpen: boolean;
  onClose: () => void;
  recommendations?: FlowRecommendation[];
  onFlowSelect: (flow: Flow) => void;
  isLoading: boolean;
}

const chatContainerStyles = {
  position: "relative" as const,
  width: "100%",
};

// Material Design 3 Search Bar styles
const md3SearchBarStyles = {
  position: "relative" as const,
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: 56, // MD3 standard height
  backgroundColor: theme.colors.surfaceVariant,
  borderRadius: theme.borderRadius.full, // MD3 search bars are fully rounded
  border: "none",
  overflow: "hidden" as const,
  transition: `all ${theme.animation.duration.normal}`,

  "&:focus-within": {
    backgroundColor: theme.colors.surface,
    boxShadow: theme.elevation.md,
  },
};

const searchIconStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 48,
  height: 48,
  margin: `0 ${theme.spacing.xs}px`,
  color: theme.colors.onSurfaceVariant,
  flexShrink: 0,
};

const chatInputStyles = {
  flex: 1,
  height: "100%",
  padding: `0 ${theme.spacing.md}px`,
  border: "none",
  outline: "none",
  backgroundColor: "transparent",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  fontSize: theme.typography.fontSize.base,
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.onSurface,

  "&::placeholder": {
    color: theme.colors.onSurfaceVariant,
    fontWeight: theme.typography.fontWeight.normal,
  },
};

// Suggestion pills styles
const suggestionPillsContainerStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: theme.spacing.xs,
  marginTop: theme.spacing.sm,
};

const suggestionPillsStyles = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: theme.spacing.xs,
};

const suggestionPillStyles = {
  display: "flex",
  alignItems: "center",
  padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
  backgroundColor: theme.colors.surfaceVariant,
  border: `1px solid ${theme.colors.outline}`,
  borderRadius: theme.borderRadius.full,
  fontSize: theme.typography.fontSize.xs,
  fontWeight: theme.typography.fontWeight.medium,
  color: theme.colors.onSurfaceVariant,
  cursor: "pointer",
  transition: `all ${theme.animation.duration.normal}`,
  whiteSpace: "nowrap" as const,

  "&:hover": {
    backgroundColor: theme.colors.surface,
    borderColor: theme.colors.primary,
    color: theme.colors.onSurface,
    transform: "scale(1.02)",
  },

  "&:focus-visible": {
    outline: `2px solid ${theme.colors.primary}`,
    outlineOffset: 2,
  },
};

// Scrollable content area styles
const scrollableContentStyles = {
  flex: 1,
  overflowY: "auto" as const,
  overflowX: "hidden" as const,
  paddingRight: theme.spacing.xs, // Space for scrollbar

  // Custom scrollbar styling
  "&::-webkit-scrollbar": {
    width: 8,
  },

  "&::-webkit-scrollbar-track": {
    background: theme.colors.surfaceVariant,
    borderRadius: theme.borderRadius.full,
  },

  "&::-webkit-scrollbar-thumb": {
    background: theme.colors.outline,
    borderRadius: theme.borderRadius.full,

    "&:hover": {
      background: theme.colors.outlineVariant,
    },
  },
};

const chatQueryContainerStyles = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 0,
  marginTop: theme.spacing.md,
  marginBottom: theme.spacing.md,
};

const errorStyles = css`
  padding: 16px;
  background: #fef2f2;
  border: 1px solid #fecaca;
  border-radius: 6px;
  margin-bottom: 16px;
`;

const errorTextStyles = css`
  font-size: 14px;
  color: #dc2626;
`;

const loadingGridStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const emptyStateStyles = css`
  text-align: center;
  padding: 48px 0;
`;

const emptyIconStyles = css`
  width: 48px;
  height: 48px;
  color: #9ca3af;
  margin: 0 auto 16px;
`;

const emptyTitleStyles = css`
  font-size: 18px;
  font-weight: 500;
  color: #111827;
  margin-bottom: 8px;
`;

const emptyDescriptionStyles = css`
  color: #6b7280;
  margin-bottom: 16px;
`;

const skeletonCardStyles = {
  borderRadius: theme.borderRadius.lg,
  border: `1px solid ${theme.colors.outline}`,
  background: theme.colors.surface,
  textAlign: "left" as const,
};

const skeletonHeaderStyles = {
  padding: theme.spacing.lg,
  borderBottom: `1px solid ${theme.colors.outline}`,
  background: theme.colors.surfaceVariant,
};

const skeletonContentStyles = {
  padding: theme.spacing.lg,
};

const closeButtonStyles = css`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 36px;
  height: 36px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.2);

  &:hover {
    background: rgba(255, 255, 255, 0.25);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  &:focus-visible {
    outline: 2px solid rgba(255, 255, 255, 0.5);
    outline-offset: 2px;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export function FlowSelector({
  isOpen,
  onClose,
  recommendations,
  onFlowSelect,
  isLoading,
}: FlowSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  const suggestedFlows =
    recommendations?.slice(0, 3).map((rec) => rec.flow) || [];

  const filteredFlows = getFlowsForQuery(recommendations || [], searchQuery);

  const handleSuggestionPillClick = (suggestion: string) => {
    setSearchQuery(suggestion);
  };

  const handleFlowSelect = async (flow: Flow) => {
    try {
      setError(null);
      const baseUrl = getApiBaseUrl();
      const response = await fetch(`${baseUrl}/api/flows/${flow.id}`);
      const data = await response.json();

      if (data.error) {
        console.error("Failed to load flow details:", data.error);
        setError(data.error);
        return;
      }

      onFlowSelect(data.flow);
      onClose();
    } catch (error) {
      console.error("Failed to load flow details:", error);
      setError("Failed to load flow details");
    }
  };

  if (!isOpen) return null;

  const SkeletonCard = () => (
    <div css={skeletonCardStyles}>
      <div css={skeletonHeaderStyles}>
        <div
          css={[
            skeletonStyles,
            {
              height: 16,
              width: "75%",
              marginBottom: 8,
            },
          ]}
        />
        <div
          css={[
            skeletonStyles,
            {
              height: 12,
              width: "50%",
            },
          ]}
        />
      </div>
      <div css={skeletonContentStyles}>
        <div
          css={[
            skeletonStyles,
            {
              height: 64,
              width: "100%",
            },
          ]}
        />
      </div>
    </div>
  );

  return createPortal(
    <div css={dialogOverlayStyles} onClick={onClose}>
      <div
        css={[
          dialogContentStyles,
          {
            maxWidth: 700,
            width: "85vw",
          },
        ]}
        onClick={(e) => e.stopPropagation()}
      >
        <div css={dialogHeaderStyles}>
          <Button
            css={closeButtonStyles}
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </Button>
          <h2 css={dialogTitleStyles}>
            <Bot size={20} />
            Let's get you started!
          </h2>
          <p css={dialogDescriptionStyles}>
            Choose a guided tour below to learn the features that matter most to
            you.
          </p>
        </div>

        <div
          css={{
            padding: "0 32px 32px",
            display: "flex",
            flexDirection: "column" as const,
            gap: 20,
            height: 500, // Fixed height to prevent modal from changing size
            overflow: "hidden" as const,
            position: "relative" as const,

            "&::before": {
              content: '""',
              position: "absolute" as const,
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background:
                "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3C/g%3E%3C/svg%3E\") repeat",
              opacity: 0.5,
              zIndex: 0,
            },

            "> *": {
              position: "relative" as const,
              zIndex: 1,
            },
          }}
        >
          {/* Search Bar */}
          <div css={chatQueryContainerStyles}>
            <div css={chatContainerStyles}>
              <div css={md3SearchBarStyles}>
                <div css={searchIconStyles}>
                  <Search size={20} />
                </div>
                <input
                  css={chatInputStyles}
                  placeholder="Search flows or try a suggestion below…"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  type="text"
                />
              </div>
            </div>

            {suggestedFlows.length > 0 && (
              <div css={suggestionPillsContainerStyles}>
                <div css={suggestionPillsStyles}>
                  {suggestedFlows.map((flow) => (
                    <button
                      key={flow.id}
                      css={suggestionPillStyles}
                      onClick={() => handleSuggestionPillClick(flow.name)}
                      type="button"
                      title={`Search for "${flow.name}"`}
                    >
                      {flow.name}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Scrollable Content Area */}
          <div css={scrollableContentStyles}>
            {error && (
              <div css={errorStyles}>
                <p css={errorTextStyles}>{error}</p>
              </div>
            )}

            {isLoading && (
              <div css={loadingGridStyles}>
                {Array.from({ length: 6 }, (_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            )}

            {!isLoading && filteredFlows.length > 0 && (
              <FlowList
                recommendations={filteredFlows}
                onFlowSelect={handleFlowSelect}
              />
            )}

            {!isLoading && filteredFlows.length === 0 && !error && (
              <div css={emptyStateStyles}>
                <div css={emptyIconStyles}>
                  <Bot size={20} />
                </div>
                <h3 css={emptyTitleStyles}>No flows found</h3>
                <p css={emptyDescriptionStyles}>
                  {searchQuery
                    ? "No flows match your search criteria."
                    : "No active onboarding flows are available at the moment."}
                </p>
                {searchQuery && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSearchQuery("");
                    }}
                  >
                    Clear search
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
