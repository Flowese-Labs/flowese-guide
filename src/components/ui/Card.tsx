/** @jsxImportSource @emotion/react */
import React from 'react'
import theme from '../../theme'
import { Clock, Steps, Play } from '../icons'
import { buttonStyles, buttonSizes } from '../shared-styles'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'elevated' | 'filled' | 'outlined'
  interactive?: boolean
  children: React.ReactNode
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardContentProps {
  children: React.ReactNode
  className?: string
}

interface CardFooterProps {
  children: React.ReactNode
  className?: string
}

// Base card styles following Material Design 3
const getCardStyles = (variant: CardProps['variant'], interactive: boolean) => ({
  display: 'flex',
  flexDirection: 'column' as const,
  borderRadius: theme.borderRadius.lg,
  transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
  cursor: interactive ? 'pointer' : 'default',
  position: 'relative' as const,
  overflow: 'hidden' as const,
  
  // Variant-specific styles
  ...(variant === 'elevated' && {
    backgroundColor: theme.colors.surface,
    boxShadow: theme.elevation.sm,
    border: 'none',
    
    // Hover state for interactive cards
    ...(interactive && {
      '&:hover': {
        boxShadow: theme.elevation.md,
        transform: 'translateY(-2px)',
      },
      
      '&:active': {
        transform: 'translateY(0)',
        boxShadow: theme.elevation.sm,
      }
    })
  }),
  
  ...(variant === 'filled' && {
    backgroundColor: theme.colors.surfaceVariant,
    border: 'none',
    
    ...(interactive && {
      '&:hover': {
        backgroundColor: theme.colors.surfaceVariant,
        boxShadow: theme.elevation.sm,
        transform: 'translateY(-1px)',
      }
    })
  }),
  
  ...(variant === 'outlined' && {
    backgroundColor: theme.colors.surface,
    border: `1px solid ${theme.colors.outline}`,
    
    ...(interactive && {
      '&:hover': {
        borderColor: theme.colors.outlineVariant,
        boxShadow: theme.elevation.sm,
        transform: 'translateY(-1px)',
      }
    })
  })
})

const cardHeaderStyles = {
  padding: theme.spacing.lg,
  paddingBottom: theme.spacing.md,
  flexShrink: 0,
}

const cardContentStyles = {
  padding: `0 ${theme.spacing.lg}px`,
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as const,
}

const cardFooterStyles = {
  padding: theme.spacing.lg,
  paddingTop: theme.spacing.md,
  flexShrink: 0,
  marginTop: 'auto',
}

export const Card: React.FC<CardProps> = ({ 
  variant = 'elevated', 
  interactive = false,
  children, 
  ...props 
}) => {
  return (
    <div
      css={getCardStyles(variant, interactive)}
      {...props}
    >
      {children}
    </div>
  )
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, ...props }) => (
  <div css={cardHeaderStyles} {...props}>
    {children}
  </div>
)

export const CardContent: React.FC<CardContentProps> = ({ children, ...props }) => (
  <div css={cardContentStyles} {...props}>
    {children}
  </div>
)

export const CardFooter: React.FC<CardFooterProps> = ({ children, ...props }) => (
  <div css={cardFooterStyles} {...props}>
    {children}
  </div>
)

// Modern flow card component with vertical layout
interface FlowCardProps {
  title: string
  description?: string
  icon: React.ReactNode
  badge?: React.ReactNode
  duration?: number
  steps?: number
  onClick: () => void
  accentColor: {
    primary: string
    container: string
  }
}

export const FlowCard: React.FC<FlowCardProps> = ({
  title,
  description,
  icon,
  badge,
  duration = 2,
  steps = 0,
  onClick,
  accentColor
}) => {
  const handleCardClick = (e: React.MouseEvent) => {
    // Prevent card click when clicking the CTA button
    if ((e.target as HTMLElement).closest('.card-cta')) {
      return;
    }
    onClick();
  };

  const handleCtaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick();
  };

  return (
    <Card
      variant="elevated"
      interactive
      onClick={handleCardClick}
      css={{
        minHeight: 320,
        width: '100%',
        maxWidth: 280,
        padding: 0,
        display: 'flex',
        flexDirection: 'column' as const,
        
        // Modern hover state - clean lift effect
        '&:hover': {
          boxShadow: theme.elevation.xl,
          transform: 'translateY(-4px)',
          
          // Keep icon visible and just enhance it
          '& .card-icon': {
            backgroundColor: accentColor.primary,
            color: theme.colors.onPrimary,
            transform: 'scale(1.05)',
            
            // Ensure icon SVG stays visible
            '& svg': {
              opacity: 1,
              color: theme.colors.onPrimary,
            }
          },
          
          '& .card-cta': {
            backgroundColor: accentColor.primary,
            color: theme.colors.onPrimary,
            transform: 'translateY(-1px)',
          }
        },
        
        // Smooth transitions
        transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
      }}
    >
      {/* Icon Section - Top */}
      <div css={{
        padding: theme.spacing.xl,
        paddingBottom: theme.spacing.lg,
        textAlign: 'center' as const,
      }}>
        <div 
          className="card-icon"
          css={{
            width: 64,
            height: 64,
            margin: '0 auto',
            backgroundColor: accentColor.container,
            borderRadius: theme.borderRadius.xl,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: theme.spacing.md,
            transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
            
            'svg': {
              width: 32,
              height: 32,
              color: accentColor.primary,
              opacity: 1, // Ensure icon is always visible
            }
          }}
        >
          {icon}
        </div>
        
        {/* Badge */}
        {badge && (
          <div css={{ marginBottom: theme.spacing.sm }}>
            {badge}
          </div>
        )}
      </div>
      
      {/* Content Section - Middle */}
      <CardContent>
        <div css={{
          textAlign: 'center' as const,
          marginBottom: theme.spacing.lg,
        }}>
          <h3 css={{
            fontSize: theme.typography.fontSize.xl,
            fontWeight: theme.typography.fontWeight.semibold,
            lineHeight: theme.typography.lineHeight.tight,
            color: theme.colors.onSurface,
            margin: `0 0 ${theme.spacing.sm}px 0`,
          }}>
            {title}
          </h3>
          
          {description && (
            <p css={{
              fontSize: theme.typography.fontSize.sm,
              color: theme.colors.onSurfaceVariant,
              lineHeight: theme.typography.lineHeight.normal,
              margin: 0,
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical' as const,
              overflow: 'hidden',
            }}>
              {description}
            </p>
          )}
        </div>
        
        {/* Meta Information */}
        <div css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme.spacing.md,
          padding: `${theme.spacing.sm}px ${theme.spacing.md}px`,
          backgroundColor: theme.colors.surfaceVariant,
          borderRadius: theme.borderRadius.lg,
          marginBottom: theme.spacing.md,
          minHeight: 40, // Prevent layout shift
        }}>
          {/* Duration */}
          <div css={{
            display: 'flex',
            alignItems: 'center',
            gap: theme.spacing.xs,
            whiteSpace: 'nowrap' as const,
          }}>
            <Clock size={14} />
            <span css={{
              fontSize: theme.typography.fontSize.sm,
              fontWeight: theme.typography.fontWeight.medium,
              color: theme.colors.onSurfaceVariant,
            }}>
              {duration} minute{duration !== 1 ? 's' : ''}
            </span>
          </div>
          
          {/* Steps */}
          {steps > 0 && (
            <>
              <div css={{
                width: 1,
                height: 14,
                backgroundColor: theme.colors.outline,
              }} />
              <div css={{
                display: 'flex',
                alignItems: 'center',
                gap: theme.spacing.xs,
                whiteSpace: 'nowrap' as const,
              }}>
                <Steps size={14} />
                <span css={{
                  fontSize: theme.typography.fontSize.sm,
                  fontWeight: theme.typography.fontWeight.medium,
                  color: theme.colors.onSurfaceVariant,
                }}>
                  {steps} step{steps !== 1 ? 's' : ''}
                </span>
              </div>
            </>
          )}
        </div>
      </CardContent>
      
      {/* CTA Section - Bottom */}
      <CardFooter css={{ 
        padding: theme.spacing.lg,
        marginTop: 'auto', // Push to bottom
      }}>
        <button
          className="card-cta"
          onClick={handleCtaClick}
          css={{
            ...buttonStyles,
            ...buttonSizes.default,
            width: '100%',
            backgroundColor: accentColor.primary,
            color: theme.colors.onPrimary,
            border: 'none',
            fontWeight: theme.typography.fontWeight.semibold,
            fontSize: theme.typography.fontSize.base,
            gap: theme.spacing.sm,
            transition: `all ${theme.animation.duration.normal} ${theme.animation.easing.standard}`,
            boxShadow: theme.elevation.sm,
            
            '&:hover': {
              backgroundColor: accentColor.primary,
              color: theme.colors.onPrimary,
              transform: 'translateY(-1px)',
              boxShadow: theme.elevation.md,
              filter: 'brightness(1.1)',
            }
          }}
        >
          <Play size={16} />
          Start Tour
        </button>
      </CardFooter>
    </Card>
  )
}

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardContent.displayName = 'CardContent'
CardFooter.displayName = 'CardFooter'
FlowCard.displayName = 'FlowCard'