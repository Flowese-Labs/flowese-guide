/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { css } from '@emotion/react';
import type { FlowStep, TooltipPosition } from "../types";
import { calculateTooltipPosition, isElementInViewport } from "../utils";
import { Button } from "./ui/Button";
import theme from "../theme";
import { badgeStyles, badgeVariants, flexBetween } from "./shared-styles";

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

// Icons as SVG components
const XIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m18 6-12 12" />
    <path d="m6 6 12 12" />
  </svg>
);

const ChevronLeftIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m9 18 6-6-6-6" />
  </svg>
);

const MousePointerIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
    <path d="m13 13 6 6" />
  </svg>
);

const NavigationIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);

const overlayStyles = {
  position: 'fixed' as const,
  inset: 0,
  background: 'rgba(0, 0, 0, 0.2)',
  zIndex: 999999,
};

const tooltipStyles = {
  position: 'fixed' as const,
  background: theme.colors.surface,
  border: `1px solid ${theme.colors.outline}`,
  borderRadius: theme.borderRadius.lg,
  boxShadow: theme.elevation['2xl'],
  maxWidth: 320,
  zIndex: theme.zIndex.tooltip,
  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
};

const tooltipHeaderStyles = {
  ...flexBetween,
  padding: theme.spacing.md,
  borderBottom: `1px solid ${theme.colors.outline}`,
};

const tooltipTitleStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing.sm,
  fontWeight: theme.typography.fontWeight.medium,
  fontSize: theme.typography.fontSize.sm,
  color: theme.colors.onSurface,
};

const iconWrapperStyles = {
  padding: theme.spacing.xs,
  background: theme.colors.primaryContainer,
  borderRadius: theme.borderRadius.sm,
  color: theme.colors.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const tooltipContentStyles = {
  padding: theme.spacing.md,
};

const contentTextStyles = css`
  font-size: 14px;
  color: #6b7280;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const navigationHintStyles = css`
  margin-bottom: 12px;
  padding: 12px;
  background: #eff6ff;
  border: 1px solid #bfdbfe;
  border-radius: 6px;
`;

const navigationHintHeaderStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
`;

const navigationHintTitleStyles = css`
  font-size: 12px;
  font-weight: 500;
  color: #1e40af;
`;

const navigationHintTextStyles = css`
  font-size: 12px;
  color: #1e40af;
`;

const progressContainerStyles = {
  ...flexBetween,
  marginBottom: theme.spacing.md,
};

const progressDotsStyles = {
  display: 'flex',
  gap: theme.spacing.xs,
};

const progressDotStyles = {
  width: theme.spacing.sm,
  height: theme.spacing.sm,
  borderRadius: '50%',
};

const actionsStyles = {
  ...flexBetween,
};

const arrowStyles = css`
  position: absolute;
  width: 0;
  height: 0;
  border: 8px solid transparent;
`;

const arrowVariants = {
  bottom: css`
    border-top: 8px solid white;
    top: -8px;
    left: 50%;
    transform: translateX(-50%);
  `,
  top: css`
    border-bottom: 8px solid white;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
  `,
  right: css`
    border-left: 8px solid white;
    left: -8px;
    top: 50%;
    transform: translateY(-50%);
  `,
  left: css`
    border-right: 8px solid white;
    right: -8px;
    top: 50%;
    transform: translateY(-50%);
  `,
};

const highlightStyles = {
  position: 'fixed' as const,
  border: `2px solid ${theme.colors.primary}`,
  background: theme.colors.primaryContainer,
  borderRadius: theme.borderRadius.sm,
  pointerEvents: 'none' as const,
  zIndex: theme.zIndex.overlay,
  boxShadow: `0 0 0 4px ${theme.colors.primaryContainer}, 0 10px 25px ${theme.colors.shadow}`,
};

export function Tooltip({
  step,
  onNext,
  onPrevious,
  onDismiss,
  canGoNext,
  canGoPrevious,
  currentStepIndex,
  totalSteps,
}: TooltipProps) {
  const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const [showCenteredTooltip, setShowCenteredTooltip] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState<TooltipPosition | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  // Find target element with better selectors
  useEffect(() => {
    if (!document) {
      return;
    }

    if (!step.targetElement) {
      setTargetElement(null);
      setShowCenteredTooltip(true);
      return;
    }

    // Try to find the element
    const element = document.querySelector(step.targetElement) as HTMLElement;

    if (!element) {
      console.warn(`Target element not found: ${step.targetElement}`);
      setTargetElement(null);
      setShowCenteredTooltip(true);
      return;
    }

    // Check if element is in viewport
    if (!isElementInViewport(element)) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });

      // Wait a bit for scroll to complete before showing tooltip
      setTimeout(() => {
        setTargetElement(element);
        setShowCenteredTooltip(false);
        const position = calculateTooltipPosition(element);
        setTooltipPosition(position);
      }, 500);
    } else {
      setTargetElement(element);
      setShowCenteredTooltip(false);
      const position = calculateTooltipPosition(element);
      setTooltipPosition(position);
    }

    // Add highlight class to target element
    element.classList.add("flowese-highlight");

    return () => {
      element.classList.remove("flowese-highlight");
    };
  }, [step.targetElement]);

  // Update tooltip position when window resizes
  useEffect(() => {
    const handleResize = () => {
      if (targetElement && tooltipPosition) {
        const newPosition = calculateTooltipPosition(targetElement);
        setTooltipPosition(newPosition);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [targetElement, tooltipPosition]);

  if (!document?.body) {
    return null;
  }

  const TooltipContent = ({ centered = false }: { centered?: boolean }) => (
    <div
      ref={tooltipRef}
      css={tooltipStyles}
      data-testid="flowese-tooltip"
      style={centered ? {
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      } : tooltipPosition ? {
        top: tooltipPosition.top,
        left: tooltipPosition.left,
      } : undefined}
    >
      {/* Arrow pointing to target */}
      {!centered && tooltipPosition && (
        <div css={[arrowStyles, arrowVariants[tooltipPosition.placement]]} />
      )}

      {/* Tooltip header */}
      <div css={tooltipHeaderStyles}>
        <div css={tooltipTitleStyles}>
          <div css={iconWrapperStyles}>
            <MousePointerIcon />
          </div>
          <span>{step.title}</span>
        </div>
        <Button
          variant="ghost"
          css={{ height: 24, width: 24, padding: 0 }}
          onClick={onDismiss}
        >
          <XIcon />
        </Button>
      </div>

      {/* Tooltip content */}
      <div css={tooltipContentStyles}>
        {step.content && (
          <p css={contentTextStyles}>{step.content}</p>
        )}

        {/* Navigation hint for cross-page tours */}
        {step.navigationHint && (
          <div css={navigationHintStyles}>
            <div css={navigationHintHeaderStyles}>
              <div             css={[iconWrapperStyles, { background: theme.colors.primaryContainer, color: theme.colors.onPrimaryContainer }]}>
                <NavigationIcon />
              </div>
              <p css={navigationHintTitleStyles}>
                Navigation Required
              </p>
            </div>
            <p css={navigationHintTextStyles}>
              {step.navigationHint}
            </p>
          </div>
        )}

        {/* Progress indicator */}
        <div css={progressContainerStyles}>
          <div css={[badgeStyles, badgeVariants.outline]}>
            Step {currentStepIndex + 1} of {totalSteps}
          </div>
          <div css={progressDotsStyles}>
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                css={[
                  progressDotStyles,
                  {
                    background:
                      i === currentStepIndex
                        ? theme.colors.primary
                        : i < currentStepIndex
                          ? theme.colors.primaryContainer
                          : theme.colors.outline
                  }
                ]}
              />
            ))}
          </div>
        </div>

        {/* Navigation buttons */}
        <div css={actionsStyles}>
          <Button
            variant="outline"
            size="sm"
            css={{ gap: 4 }}
            onClick={onPrevious}
            disabled={!canGoPrevious}
          >
            <ChevronLeftIcon />
            Previous
          </Button>

          <Button
            variant="primary"
            size="sm"
            css={{ gap: 4 }}
            onClick={onNext}
            disabled={!canGoNext && currentStepIndex >= totalSteps - 1}
          >
            {canGoNext ? (
              <>
                Next
                <ChevronRightIcon />
              </>
            ) : (
              "Finish"
            )}
          </Button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Overlay */}
      {createPortal(
        <div
          css={overlayStyles}
          onClick={onDismiss}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              onDismiss();
            }
          }}
          role="button"
          tabIndex={0}
        />,
        document.body
      )}

      {/* Centered tooltip when no target element */}
      {showCenteredTooltip &&
        createPortal(<TooltipContent centered />, document.body)
      }

      {/* Positioned tooltip */}
      {targetElement && tooltipPosition &&
        createPortal(<TooltipContent />, document.body)
      }

      {/* Target highlight */}
      {targetElement &&
        createPortal(
          <div
            css={highlightStyles}
            style={{
              top: targetElement.getBoundingClientRect().top - 8,
              left: targetElement.getBoundingClientRect().left - 8,
              width: targetElement.getBoundingClientRect().width + 16,
              height: targetElement.getBoundingClientRect().height + 16,
            }}
          />,
          document.body
        )}
    </>
  );
}