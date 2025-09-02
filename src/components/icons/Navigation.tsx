import React from 'react';
import { IconProps } from './types';

export const Navigation: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M13 7l5 5m0 0l-5 5m5-5H6" />
  </svg>
);