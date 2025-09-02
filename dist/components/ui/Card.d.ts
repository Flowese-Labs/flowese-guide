/** @jsxImportSource @emotion/react */
import React from 'react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'elevated' | 'filled' | 'outlined';
    interactive?: boolean;
    children: React.ReactNode;
}
interface CardHeaderProps {
    children: React.ReactNode;
    className?: string;
}
interface CardContentProps {
    children: React.ReactNode;
    className?: string;
}
interface CardFooterProps {
    children: React.ReactNode;
    className?: string;
}
export declare const Card: React.FC<CardProps>;
export declare const CardHeader: React.FC<CardHeaderProps>;
export declare const CardContent: React.FC<CardContentProps>;
export declare const CardFooter: React.FC<CardFooterProps>;
interface FlowCardProps {
    title: string;
    description?: string;
    icon: React.ReactNode;
    badge?: React.ReactNode;
    duration?: number;
    steps?: number;
    onClick: () => void;
    accentColor: {
        primary: string;
        container: string;
    };
}
export declare const FlowCard: React.FC<FlowCardProps>;
export {};
//# sourceMappingURL=Card.d.ts.map