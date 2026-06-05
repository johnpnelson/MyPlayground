import { default as React } from '../../../../node_modules/react';
/**
 * Simple tab component for tabbed chart views - matches AngularJS tab styling
 */
export interface SimpleTabProps {
    label: string;
    isActive: boolean;
    onClick: () => void;
    className?: string;
    showCount?: boolean;
    count?: number;
}
export declare const SimpleTab: React.FC<SimpleTabProps>;
