/** @jsxImportSource @emotion/react */
import React, { useState } from 'react'
import theme from '../../theme'
import { Button } from './Button'
import type { Flow } from '../../types'

interface FlowListProps {
  flows: Flow[]
  onFlowSelect: (flow: Flow) => void
}

interface FlowCategory {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  flows: Flow[]
  priority: number
}

// Icons for different flow categories
const RocketIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
  </svg>
)

const BookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
  </svg>
)

const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10"/>
  </svg>
)

const LightbulbIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 21h6"/>
    <path d="M12 3C8.5 3 5.7 5.6 5.7 9c0 2.4 1.4 4.5 3.4 5.5.4.2.9.5.9 1.5 0 .6.4 1 1 1h2c.6 0 1-.4 1-1 0-1-.5-1.3-.9-1.5-2-1-3.4-3.1-3.4-5.5C18.3 5.6 15.5 3 12 3z"/>
  </svg>
)

export const FlowList: React.FC<FlowListProps> = ({ flows, onFlowSelect }) => {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set(['getting-started']))

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId)
    } else {
      newExpanded.add(categoryId)
    }
    setExpandedCategories(newExpanded)
  }

  // Categorize flows based on their type
  const categorizeFlows = (flows: Flow[]): FlowCategory[] => {
    const categories: FlowCategory[] = [
      {
        id: 'getting-started',
        title: 'Getting Started',
        description: 'Perfect for new users',
        icon: <RocketIcon />,
        flows: flows.filter(flow => flow.type === 'onboarding'),
        priority: 1
      },
      {
        id: 'key-features',
        title: 'Learn Key Features',
        description: 'Master important capabilities',
        icon: <ZapIcon />,
        flows: flows.filter(flow => flow.type === 'feature_tour'),
        priority: 2
      },
      {
        id: 'training',
        title: 'Advanced Training',
        description: 'Become a power user',
        icon: <BookIcon />,
        flows: flows.filter(flow => flow.type === 'training'),
        priority: 3
      },
      {
        id: 'quick-wins',
        title: 'Quick Improvements',
        description: 'Small changes, big impact',
        icon: <LightbulbIcon />,
        flows: flows.filter(flow => flow.type === 'nudge'),
        priority: 4
      }
    ]

    // Only return categories that have flows
    return categories.filter(category => category.flows.length > 0).sort((a, b) => a.priority - b.priority)
  }

  const categories = categorizeFlows(flows)

  // Get the first recommended flow (prioritize onboarding, then feature tours, then any)
  const getRecommendedFlow = (): Flow | null => {
    const onboardingFlows = flows.filter(flow => flow.type === 'onboarding')
    if (onboardingFlows.length > 0) return onboardingFlows[0]
    
    const featureTourFlows = flows.filter(flow => flow.type === 'feature_tour')
    if (featureTourFlows.length > 0) return featureTourFlows[0]
    
    return flows.length > 0 ? flows[0] : null
  }

  const recommendedFlow = getRecommendedFlow()

  const FlowItem: React.FC<{ flow: Flow; isRecommended?: boolean }> = ({ flow, isRecommended = false }) => (
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing.lg,
        backgroundColor: theme.colors.surface,
        border: `1px solid ${theme.colors.outline}`,
        borderRadius: theme.borderRadius.lg,
        cursor: 'pointer',
        transition: `all ${theme.animation.duration.normal}`,
        
        '&:hover': {
          backgroundColor: theme.colors.surfaceVariant,
          borderColor: theme.colors.primary,
          transform: 'translateY(-1px)',
          boxShadow: theme.elevation.md,
        }
      }}
      onClick={() => onFlowSelect(flow)}
    >
      {/* Content */}
      <div css={{ flex: 1, minWidth: 0 }}>
        <div css={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.sm,
          marginBottom: theme.spacing.xs,
        }}>
          <h3 css={{
            fontSize: theme.typography.fontSize.lg,
            fontWeight: theme.typography.fontWeight.semibold,
            color: theme.colors.onSurface,
            margin: 0,
          }}>
            {flow.name}
          </h3>
          {isRecommended && (
            <span css={{
              backgroundColor: theme.colors.primary,
              color: theme.colors.onPrimary,
              fontSize: theme.typography.fontSize.xs,
              fontWeight: theme.typography.fontWeight.medium,
              padding: '2px 8px',
              borderRadius: theme.borderRadius.full,
            }}>
              Recommended
            </span>
          )}
        </div>
        
        {flow.description && (
          <p css={{
            fontSize: theme.typography.fontSize.sm,
            color: theme.colors.onSurfaceVariant,
            lineHeight: theme.typography.lineHeight.normal,
            margin: `0 0 ${theme.spacing.sm}px 0`,
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical' as const,
            overflow: 'hidden',
          }}>
            {flow.description}
          </p>
        )}
        
        {/* Meta info */}
        <div css={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing.md,
          fontSize: theme.typography.fontSize.xs,
          color: theme.colors.onSurfaceVariant,
        }}>
          <span css={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <polyline points="12,6 12,12 16,14"/>
            </svg>
            {flow.estimatedDurationMinutes || 2} minute{(flow.estimatedDurationMinutes || 2) !== 1 ? 's' : ''}
          </span>
          {Array.isArray(flow.steps) && flow.steps.length > 0 && (
            <span css={{ display: 'flex', alignItems: 'center', gap: theme.spacing.xs }}>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <polyline points="9,9 9,15 15,15"/>
              </svg>
              {flow.steps.length} step{flow.steps.length !== 1 ? 's' : ''}
            </span>
          )}
        </div>
      </div>
      
      {/* CTA */}
      <Button
        variant={isRecommended ? 'primary' : 'outline'}
        size="sm"
        css={{
          marginLeft: theme.spacing.lg,
          flexShrink: 0,
        }}
        onClick={(e) => {
          e.stopPropagation()
          onFlowSelect(flow)
        }}
      >
        Start
      </Button>
    </div>
  )

  return (
    <div css={{
      display: 'flex',
      flexDirection: 'column' as const,
      gap: theme.spacing.lg,
      maxHeight: 500,
      overflow: 'auto',
      
      '&::-webkit-scrollbar': {
        width: 6,
      },
      '&::-webkit-scrollbar-track': {
        background: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgba(0, 0, 0, 0.1)',
        borderRadius: 3,
      },
    }}>
      
      {/* Recommended Flow */}
      {recommendedFlow && (
        <FlowItem flow={recommendedFlow} isRecommended />
      )}
      
      {/* Flow Categories */}
      {categories.map((category) => (
        <div key={category.id}>
          <button
            css={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing.sm,
              width: '100%',
              padding: `${theme.spacing.sm}px 0`,
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              marginBottom: theme.spacing.sm,
              
              '&:hover': {
                '& h3': {
                  color: theme.colors.primary,
                }
              }
            }}
            onClick={() => toggleCategory(category.id)}
          >
            <div css={{
              padding: theme.spacing.xs,
              backgroundColor: theme.colors.surfaceVariant,
              borderRadius: theme.borderRadius.sm,
              color: theme.colors.onSurfaceVariant,
            }}>
              {category.icon}
            </div>
            <div css={{ flex: 1, textAlign: 'left' as const }}>
              <h3 css={{
                fontSize: theme.typography.fontSize.base,
                fontWeight: theme.typography.fontWeight.medium,
                color: theme.colors.onSurface,
                margin: 0,
                transition: `color ${theme.animation.duration.normal}`,
              }}>
                {category.title}
              </h3>
              <p css={{
                fontSize: theme.typography.fontSize.sm,
                color: theme.colors.onSurfaceVariant,
                margin: 0,
              }}>
                {category.description}
              </p>
            </div>
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              css={{
                color: theme.colors.onSurfaceVariant,
                transition: `transform ${theme.animation.duration.normal}`,
                transform: expandedCategories.has(category.id) ? 'rotate(180deg)' : 'rotate(0deg)',
              }}
            >
              <polyline points="6,9 12,15 18,9"/>
            </svg>
          </button>
          
          {/* Expanded Flows */}
          {expandedCategories.has(category.id) && (
            <div css={{
              display: 'flex',
              flexDirection: 'column' as const,
              gap: theme.spacing.md,
            }}>
              {category.flows.map((flow) => (
                <FlowItem 
                  key={flow.id} 
                  flow={flow} 
                  isRecommended={false}
                />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

FlowList.displayName = 'FlowList'