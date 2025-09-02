import React from 'react';
import { IconProps } from './types';

export const ChevronRight: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);