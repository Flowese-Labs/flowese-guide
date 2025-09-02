/** @jsxImportSource @emotion/react */
import React from 'react';
import { badgeVariants } from '../shared-styles';
interface BadgeProps {
    variant?: keyof typeof badgeVariants;
    children: React.ReactNode;
    className?: string;
    icon?: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;
export {};
//# sourceMappingURL=Badge.d.ts.map