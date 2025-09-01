/** @jsxImportSource @emotion/react */
import React from 'react'
import { buttonStyles, buttonVariants, buttonSizes } from '../shared-styles'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants
  size?: keyof typeof buttonSizes
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'default', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        css={[buttonStyles, buttonVariants[variant], buttonSizes[size]]}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'