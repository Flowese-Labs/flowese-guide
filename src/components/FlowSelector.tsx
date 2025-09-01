/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import { createPortal } from "react-dom";
import type { Flow } from "../types";
import { getApiBaseUrl } from "../utils";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { FlowList } from "./ui/FlowList";
import theme from "../theme";
import {
  cardStyles,
  cardHeaderStyles,
  cardContentStyles,
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
  flows: Flow[];
  onFlowSelect: (flow: Flow) => void;
  isLoading: boolean;
}

// Icons as SVG components
const SearchIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="11" cy="11" r="8"/>
    <path d="m21 21-4.35-4.35"/>
  </svg>
);

const SendIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const BotIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M12 8V4H8" />
    <rect width="16" height="12" x="4" y="8" rx="2" />
    <path d="m9 16 0 0" />
    <path d="m15 16 0 0" />
  </svg>
);





const XIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);



// Get suggested flows (first 3-4 flows for quick access)
const getSuggestedFlows = (flows: Flow[]): Flow[] => {
  // Prioritize onboarding flows first, then feature tours, then others
  const onboardingFlows = flows.filter(flow => flow.type === 'onboarding')
  const featureTourFlows = flows.filter(flow => flow.type === 'feature_tour')
  const otherFlows = flows.filter(flow => flow.type !== 'onboarding' && flow.type !== 'feature_tour')
  
  const suggested: Flow[] = []
  
  // Add up to 2 onboarding flows
  suggested.push(...onboardingFlows.slice(0, 2))
  
  // Add 1-2 feature tour flows
  if (suggested.length < 3) {
    suggested.push(...featureTourFlows.slice(0, 3 - suggested.length))
  }
  
  // Fill remaining slots with other flows
  if (suggested.length < 3) {
    suggested.push(...otherFlows.slice(0, 3 - suggested.length))
  }
  
  return suggested.slice(0, 3) // Limit to 3 suggestions
}

const chatContainerStyles = {
  position: "relative" as const,
  width: '100%',
};

// Material Design 3 Search Bar styles
const md3SearchBarStyles = {
  position: 'relative' as const,
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  height: 56, // MD3 standard height
  backgroundColor: theme.colors.surfaceVariant,
  borderRadius: theme.borderRadius.full, // MD3 search bars are fully rounded
  border: 'none',
  overflow: 'hidden' as const,
  transition: `all ${theme.animation.duration.normal}`,
  
  '&:focus-within': {
    backgroundColor: theme.colors.surface,
    boxShadow: theme.elevation.md,
  }
};

const searchIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 48,
  height: 48,
  margin: `0 ${theme.spacing.xs}px`,
  color: theme.colors.onSurfaceVariant,
  flexShrink: 0,
};

const chatInputStyles = {
  flex: 1,
  height: '100%',
  padding: `0 ${theme.spacing.md}px`,
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  fontSize: theme.typography.fontSize.base,
  fontWeight: theme.typography.fontWeight.normal,
  color: theme.colors.onSurface,
  
  "&::placeholder": {
    color: theme.colors.onSurfaceVariant,
    fontWeight: theme.typography.fontWeight.normal,
  },
};

const sendButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  margin: `0 ${theme.spacing.xs}px`,
  padding: 0,
  borderRadius: theme.borderRadius.full,
  background: theme.colors.primary,
  color: theme.colors.onPrimary,
  border: 'none',
  cursor: 'pointer',
  transition: `all ${theme.animation.duration.normal}`,
  flexShrink: 0,

  '&:hover:not(:disabled)': {
    background: theme.colors.primary,
    boxShadow: theme.elevation.sm,
    filter: 'brightness(1.1)',
  },

  '&:disabled': {
    background: theme.colors.disabled,
    cursor: 'not-allowed',
    opacity: 0.6,
  }
};

const quickChipsContainerStyles = {
  display: "flex",
  flexWrap: "wrap" as const,
  gap: theme.spacing.xs, // Tighter gap for MD3 chips
  marginTop: theme.spacing.sm,
  justifyContent: "flex-start", // Left align for better readability
  alignItems: "center",
};

// Material Design 3 Suggestion Chip styles
const suggestionChipStyles = {
  height: 32,
  padding: `0 ${theme.spacing.md}px`,
  borderRadius: theme.borderRadius.sm, // MD3 uses smaller border radius for chips
  background: theme.colors.surface,
  border: `1px solid ${theme.colors.outline}`,
  color: theme.colors.onSurfaceVariant,
  fontSize: theme.typography.fontSize.sm,
  fontWeight: theme.typography.fontWeight.medium,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  cursor: 'pointer',
  transition: `all ${theme.animation.duration.normal}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  whiteSpace: 'nowrap' as const,
  userSelect: 'none' as const,
  
  // MD3 interaction states
  "&:hover": {
    background: theme.colors.surfaceVariant,
    borderColor: theme.colors.outline,
    boxShadow: theme.elevation.sm,
  },
  
  "&:focus": {
    outline: `2px solid ${theme.colors.primary}`,
    outlineOffset: 2,
  },
  
  "&:active": {
    background: theme.colors.surfaceVariant,
    transform: 'scale(0.98)',
  }
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
  ...cardStyles,
};

const skeletonHeaderStyles = {
  ...cardHeaderStyles,
};

const skeletonContentStyles = {
  ...cardContentStyles,
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
  flows,
  onFlowSelect,
  isLoading,
}: FlowSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [chatQuery, setChatQuery] = useState("");
  const [error, setError] = useState<string | null>(null);

  // Get suggested flows for chips
  const suggestedFlows = getSuggestedFlows(flows);

  // Filter flows based on search query
  const filteredFlows = flows.filter((flow) => {
    if (!searchQuery.trim()) return true;
    const query = searchQuery.toLowerCase();
    return (
      flow.name.toLowerCase().includes(query) ||
      flow.description?.toLowerCase().includes(query) ||
      flow.type.toLowerCase().includes(query)
    );
  });

  const handleChatQuery = () => {
    setSearchQuery(chatQuery);
  };

  const handleSuggestionChip = (flow: Flow) => {
    // Directly select the flow instead of searching
    handleFlowSelect(flow);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleChatQuery();
    }
  };

  const handleFlowSelect = async (flow: Flow) => {
    try {
      setError(null);
      // Fetch complete flow details including steps
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
            width: '85vw',
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
            <XIcon />
          </Button>
          <h2 css={dialogTitleStyles}>
            <BotIcon />
            Let's get you started!
          </h2>
          <p css={dialogDescriptionStyles}>
            Choose a guided tour below to learn the features that matter most to you.
          </p>
        </div>

        <div
          css={{
            padding: "0 32px 32px",
            display: "flex",
            flexDirection: "column" as const,
            gap: 20,
            flex: 1,
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
                'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'40\' viewBox=\'0 0 40 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23f1f5f9\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'20\' cy=\'20\' r=\'1\'/%3E%3C/g%3E%3C/svg%3E") repeat',
              opacity: 0.5,
              zIndex: 0,
            },

            "> *": {
              position: "relative" as const,
              zIndex: 1,
            },
          }}
        >
          {/* Chat Query Bar */}
          <div css={chatQueryContainerStyles}>
            {/* MD3 Search Bar */}
            <div css={chatContainerStyles}>
              <div css={md3SearchBarStyles}>
                <div css={searchIconStyles}>
                  <SearchIcon />
                </div>
                <input
                  css={chatInputStyles}
                  placeholder="Search flows or try a suggestion below…"
                  value={chatQuery}
                  onChange={(e) => setChatQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  type="text"
                />
                {chatQuery.trim() && (
                  <Button
                    css={sendButtonStyles}
                    onClick={handleChatQuery}
                  >
                    <SendIcon />
                  </Button>
                )}
              </div>
            </div>

            {/* Suggestion Chips */}
            {suggestedFlows.length > 0 && (
              <div css={quickChipsContainerStyles}>
                {suggestedFlows.map((flow) => (
                  <button
                    key={flow.id}
                    css={suggestionChipStyles}
                    onClick={() => handleSuggestionChip(flow)}
                    type="button"
                  >
                    {flow.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Error state */}
          {error && (
            <div css={errorStyles}>
              <p css={errorTextStyles}>{error}</p>
            </div>
          )}

          {/* Loading state */}
          {isLoading && (
            <div css={loadingGridStyles}>
              {Array.from({ length: 6 }, (_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Flows list */}
          {!isLoading && filteredFlows.length > 0 && (
            <FlowList 
              flows={filteredFlows} 
              onFlowSelect={handleFlowSelect}
            />
          )}

          {/* Empty state */}
          {!isLoading && filteredFlows.length === 0 && !error && (
            <div css={emptyStateStyles}>
              <div css={emptyIconStyles}>
                <BotIcon />
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
                    setChatQuery("");
                  }}
                >
                  Clear search
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

