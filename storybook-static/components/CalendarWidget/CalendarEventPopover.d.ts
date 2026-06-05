import { default as React } from '../../../node_modules/react';
/**
 * Props for CalendarEventPopover component
 */
export interface CalendarEventPopoverProps {
    /** Event object containing title and extended properties */
    event: Record<string, any>;
    /** Optional callback to close the popover (for future extensibility or custom implementations) */
    closePopover?: () => void;
}
/**
 * CalendarEventPopover Component
 *
 * Renders dynamic popover content for calendar events.
 * If multiple events exist on the same day, shows only the title.
 * If eventDetail array is provided (single event), renders sections dynamically.
 * Otherwise, renders title and description as fallback.
 */
export declare const CalendarEventPopover: React.FC<CalendarEventPopoverProps>;
