import React from 'react';
import { IconProps } from './types';

export const Zap: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <polygon points="13,2 3,14 12,14 11,22 21,10 12,10" />
  </svg>
);