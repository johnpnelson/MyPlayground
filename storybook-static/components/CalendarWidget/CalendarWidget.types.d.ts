import { ICalendarEvent, ICalendarConfig } from '@frontline/hcm-react-calendar';
import { CalendarApiEvent } from '../../types/calendar-api-event';
/**
 * Content fragment for structured inline content within event details
 * Supports text, FontAwesome icons, and badges with optional styling
 */
export interface IContentFragment {
    /** Type of content fragment */
    type: 'text' | 'icon' | 'badge';
    /**
     * The content value:
     * - For 'text': the text string
     * - For 'icon': FontAwesome icon name (e.g., 'faUser', 'faCalendar')
     * - For 'badge': badge label text
     */
    value: string;
    /**
     * Optional FontAwesome icon style/prefix (only for type='icon').
     * Options: 'solid' (default), 'light', 'regular', 'brands'
     */
    iconStyle?: 'solid' | 'light' | 'regular' | 'brands';
    /** Optional inline styles for this fragment */
    style?: React.CSSProperties;
}
/**
 * Event detail item for popover sections
 * Supports both simple string descriptions and structured fragment arrays
 */
export interface IEventDetailItem {
    /** Optional FontAwesome icon name to display at the start of the row (e.g., 'faUser', 'faCalendar') */
    icon?: string;
    /**
     * Optional FontAwesome icon style/prefix.
     * Options: 'solid' (default), 'light', 'regular', 'brands'
     */
    iconStyle?: 'solid' | 'light' | 'regular' | 'brands';
    /** Optional icon color (CSS color value, e.g., '#65727d', 'var(--color-pepper-300)') */
    iconColor?: string;
    /** Section title */
    title: string;
    /** Description - can be a simple string or array of structured content fragments */
    description: string | IContentFragment[];
    /** Optional layout variant for structured content fragments */
    descriptionLayout?: 'inline' | 'stacked';
    /** Truncation control: false = no truncate, true = 2 lines (default), number = custom line count */
    truncate?: boolean | number;
    /** Optional tooltip text to display on hover */
    tooltip?: string;
}
/**
 * Badge legend item interface
 */
export interface IBadgeLegend {
    /** Badge label/text */
    badge: string;
    /** Badge background color */
    badgeColor: string;
    /** Badge text color */
    badgeTextColor: string;
    /** Whether this badge is currently visible/selected */
    visible: boolean;
    /** Display label for the legend */
    label: string;
}
/**
 * Default extended properties for calendar events (badge-related)
 */
export interface IDefaultExtendedProps {
    badge?: string;
    badgeColor?: string;
    badgeTextColor?: string;
    description?: string;
}
/**
 * Calendar event with extended badge properties
 * @template TExtendedProps - Custom extended properties type (extends default badge props)
 */
export interface ICalendarEventWithBadge<TExtendedProps extends Record<string, unknown> = {}> extends ICalendarEvent {
    /** Event detail sections for dynamic popover rendering */
    eventDetail?: IEventDetailItem[];
    extendedProps?: IDefaultExtendedProps & TExtendedProps;
}
/**
 * Calendar widget options interface
 * Contains all configuration options for calendar behavior and display
 */
export interface ICalendarWidgetOptions {
    /** Number of months to display side-by-side (disables responsive mode) */
    numberOfMonths?: number;
    /** Start date for the calendar view range (ISO date string or Date, e.g. '2026-02-22') */
    fromDate?: string | Date;
    /** End date for the calendar view range (ISO date string or Date, e.g. '2026-06-07') */
    toDate?: string | Date;
    /** Enable responsive month calculation based on container width (default: true) */
    responsive?: boolean;
    /** Minimum months in responsive mode (default: 2) */
    responsiveMinMonths?: number;
    /** Maximum months in responsive mode (default: 3) */
    responsiveMaxMonths?: number;
    /** Approximate width per month in responsive mode (default: 350px) */
    responsiveMonthWidth?: number;
    /** Number of months to move on navigation (default: 1) */
    navigationStep?: number;
    /** Calendar configuration options */
    config?: ICalendarConfig;
    /** Text to show when no events available */
    noEventsText?: string;
    /** Show "non work day" checkbox in footer (default: false) */
    showNonWorkDayCheckbox?: boolean;
    /** Show navigation buttons (next/prev arrows) on the calendar (default: false) */
    showNavButton?: boolean;
}
/**
 * Calendar widget actions interface
 * Contains all callback handlers for user interactions
 */
export interface ICalendarWidgetActions {
    /** Callback when navigation arrows (next/prev) are clicked. Can return void or a Promise. */
    onNavClick?: (direction: 'prev' | 'next') => void | Promise<void>;
    /** Callback when non work day checkbox is toggled */
    onNonWorkDayToggle?: (checked: boolean) => void;
    /** Custom popover body component - handles dynamic content rendering */
    popoverBodyComponent?: (event: Record<string, any>, closePopover: () => void) => React.ReactNode;
}
/**
 * Calendar widget data interface
 * @template TExtendedProps - Custom extended properties type for events
 */
export interface ICalendarWidgetData<TExtendedProps extends Record<string, unknown> = {}> {
    /** Optional source tag from API payloads (for example: 'cmp-calendar'). */
    tagName?: string;
    /** Array of events to display on the calendar. API consumers should pass raw calendar events with eventType. */
    events?: Array<CalendarApiEvent | ICalendarEventWithBadge<TExtendedProps>>;
    /** Optional API-style content wrapper. When provided, events are read from content.events. */
    content?: {
        events?: Array<CalendarApiEvent | ICalendarEventWithBadge<TExtendedProps>>;
    };
    /**
     * Array of legends to display in footer.
     * When raw API events are supplied, legends auto-derive from internal event type mappings.
     */
    legends?: IBadgeLegend[];
    /** Configuration options for the calendar widget */
    options?: ICalendarWidgetOptions;
    /** Action callbacks for user interactions */
    actions?: ICalendarWidgetActions;
}
/**
 * Props for the CalendarWidget component
 * @template TExtendedProps - Custom extended properties type for events
 */
export interface CalendarWidgetProps<TExtendedProps extends Record<string, unknown> = {}> {
    /** Widget data containing events, legends, options, and actions */
    widgetData?: ICalendarWidgetData<TExtendedProps>;
    /** Text to show when no content available */
    noContentText?: string;
    /** Widget title displayed in header */
    title?: string;
    /** Additional CSS classes */
    className?: string;
    /** Width preference for responsive layouts */
    widthPreference?: 'fullWidthOnly' | 'halfWidth' | 'thirdWidth';
    /** Data source identifier */
    dataSource?: string;
    /** CSS height for the calendar */
    height?: string | number;
}
