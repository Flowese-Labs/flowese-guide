import React from 'react';
import { IconProps } from './types';

export const Lightbulb: React.FC<IconProps> = ({ size = 20, className }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    className={className}
  >
    <path d="M9 21h6" />
    <path d="M12 3C8.5 3 5.7 5.6 5.7 9c0 2.4 1.4 4.5 3.4 5.5.4.2.9.5.9 1.5 0 .6.4 1 1 1h2c.6 0 1-.4 1-1 0-1-.5-1.3-.9-1.5-2-1-3.4-3.1-3.4-5.5C18.3 5.6 15.5 3 12 3z" />
  </svg>
);