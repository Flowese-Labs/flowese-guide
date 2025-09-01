/** @jsxImportSource @emotion/react */
import React from 'react'
import { badgeStyles, badgeVariants } from '../shared-styles'

interface BadgeProps {
  variant?: keyof typeof badgeVariants
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({ 
  variant = 'default', 
  children, 
  icon,
  ...props 
}) => {
  return (
    <span
      css={[badgeStyles, badgeVariants[variant]]}
      {...props}
    >
      {icon && <span css={{ marginRight: 4 }}>{icon}</span>}
      {children}
    </span>
  )
}

Badge.displayName = 'Badge'