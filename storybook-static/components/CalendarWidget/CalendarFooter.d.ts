import { default as React } from '../../../node_modules/react';
import { IBadgeLegend } from './CalendarWidget.types';
/**
 * Props for CalendarFooter component
 */
export interface CalendarFooterProps {
    /** Array of legends to display */
    legends: IBadgeLegend[];
    /** Show "non work day" checkbox (default: false) */
    showNonWorkDayCheckbox?: boolean;
    /** Callback when non work day checkbox is toggled */
    onNonWorkDayToggle?: (checked: boolean) => void;
    /** Optional custom footer content to display below badges */
    footerContent?: React.ReactNode;
}
/**
 * CalendarFooter Component
 *
 * Renders footer with circular badge legends and optional "non work day" checkbox.
 * Used to display event type indicators and filters.
 */
export declare const CalendarFooter: React.FC<CalendarFooterProps>;
