/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";

import { FlowSelector } from "./FlowSelector";
import { Tooltip } from "./Tooltip";
import { Button } from "./ui/Button";
import { fetchFlows } from "../utils";
import type { Flow } from "../types";

interface FlowProviderProps {
  applicationId: string;
  baseUrl?: string;
  onFlowComplete?: (flowId: string) => void;
  onStepComplete?: (stepId: string) => void;
}

// Bot icon as SVG component
const BotIcon = () => (
  <svg
    width="16"
    height="16"
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



export function FlowProvider({
  applicationId,
  baseUrl: _baseUrl,
  onFlowComplete,
  onStepComplete,
}: FlowProviderProps) {
  const [showFlowSelection, setShowFlowSelection] = useState(false);
  const [flows, setFlows] = useState<Flow[]>([]);
  const [selectedFlow, setSelectedFlow] = useState<Flow | null>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Fetch flows when component mounts
  useEffect(() => {
    const loadFlows = async () => {
      if (!applicationId) return;

      setIsLoading(true);
      try {
        const fetchedFlows = await fetchFlows(applicationId);
        setFlows(fetchedFlows);
      } catch (error) {
        console.error("Failed to fetch flows:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadFlows();
  }, [applicationId]);

  // Helper functions
  const getCurrentStep = () => {
    if (!selectedFlow || !Array.isArray(selectedFlow.steps)) {
      return null;
    }
    return selectedFlow.steps[currentStepIndex];
  };

  const getTotalSteps = () => {
    if (!selectedFlow || !Array.isArray(selectedFlow.steps)) {
      return 0;
    }
    return selectedFlow.steps.length;
  };

  const canGoNext = () => {
    if (!selectedFlow || !Array.isArray(selectedFlow.steps)) {
      return false;
    }
    return currentStepIndex < selectedFlow.steps.length - 1;
  };

  const canGoPrevious = () => {
    return currentStepIndex > 0;
  };

  const nextStep = () => {
    if (canGoNext()) {
      setCurrentStepIndex((prev) => prev + 1);
    }
  };

  const previousStep = () => {
    if (canGoPrevious()) {
      setCurrentStepIndex((prev) => prev - 1);
    }
  };

  const dismissOnboarding = () => {
    setSelectedFlow(null);
    setCurrentStepIndex(0);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!selectedFlow) return;

      // Allow copy/paste shortcuts to work normally
      if (
        (event.metaKey || event.ctrlKey) &&
        (event.key === "c" || event.key === "v" || event.key === "x")
      ) {
        return; // Don't prevent default, let browser handle it
      }

      switch (event.key) {
        case "Escape":
          handleDismiss();
          break;
        case "ArrowRight":
          if (canGoNext()) {
            handleNext();
          }
          break;
        case "ArrowLeft":
          if (canGoPrevious()) {
            handlePrevious();
          }
          break;
      }
    };

    if (selectedFlow) {
      document.addEventListener("keydown", handleKeyDown);
      // Prevent scrolling when onboarding is active
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedFlow, currentStepIndex]);

  // Handle click outside to dismiss
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedFlow && triggerRef.current) {
        const target = event.target as Node;
        if (!triggerRef.current.contains(target)) {
          // Don't dismiss if clicking on the tooltip itself
          const tooltip = document.querySelector(
            "[data-testid='flowese-tooltip']"
          );
          if (tooltip && tooltip.contains(target)) {
            return;
          }
          handleDismiss();
        }
      }
    };

    if (selectedFlow) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedFlow]);

  const handleTriggerClick = () => {
    setShowFlowSelection(true);
  };

  const handleFlowSelectionClose = () => {
    setShowFlowSelection(false);
  };

  const handleFlowSelect = (flow: Flow) => {
    setSelectedFlow(flow);
    setCurrentStepIndex(0);
    setShowFlowSelection(false);
  };

  const handleNext = () => {
    const currentStep = getCurrentStep();
    if (currentStep) {
      onStepComplete?.(currentStep.id);
    }

    if (canGoNext()) {
      nextStep();
    } else {
      // Flow completed
      if (selectedFlow) {
        onFlowComplete?.(selectedFlow.id);
      }
      handleDismiss();
    }
  };

  const handlePrevious = () => {
    previousStep();
  };

  const handleDismiss = () => {
    dismissOnboarding();
  };

  const currentStep = getCurrentStep();
  const totalSteps = getTotalSteps();

  if (!currentStep) {
    return (
      <>
        <Button
          ref={triggerRef}
          variant="outline"
          size="sm"
          css={{ gap: 8 }}
          onClick={handleTriggerClick}
        >
          <BotIcon />
          Guide
        </Button>

        <FlowSelector
          isOpen={showFlowSelection}
          onClose={handleFlowSelectionClose}
          flows={flows}
          onFlowSelect={handleFlowSelect}
          isLoading={isLoading}
        />
      </>
    );
  }

  return (
    <>
      {/* Trigger button */}
      <Button
        ref={triggerRef}
        variant="outline"
        size="sm"
        css={{ gap: 8 }}
        onClick={handleTriggerClick}
      >
        <BotIcon />
        Guide
      </Button>

      {/* Flow selection dialog */}
      <FlowSelector
        isOpen={showFlowSelection}
        onClose={handleFlowSelectionClose}
        flows={flows}
        onFlowSelect={handleFlowSelect}
        isLoading={isLoading}
      />

      {/* Step tooltip */}
      <Tooltip
        step={currentStep}
        onNext={handleNext}
        onPrevious={handlePrevious}
        onDismiss={handleDismiss}
        canGoNext={canGoNext()}
        canGoPrevious={canGoPrevious()}
        currentStepIndex={currentStepIndex}
        totalSteps={totalSteps}
      />
    </>
  );
}
