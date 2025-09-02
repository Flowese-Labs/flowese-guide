import React from 'react';
import { IconProps } from './types';

export const Play: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="5,3 19,12 5,21" />
  </svg>
);