/**
 * Minimal event shape used by validation.
 * Accepts both ICalendarEventWithBadge (id: string) and raw CalendarApiEvent (id: number).
 */
interface MinimalCalendarEvent {
    id?: string | number;
    title?: string;
    start?: string | Date;
}
export declare const calendarWidgetLogic: {
    /**
     * Validate that events have required fields (id, title, start).
     * Works with both pre-mapped ICalendarEventWithBadge events and
     * raw CalendarApiEvent objects from the API.
     * Logs warnings for invalid events.
     */
    validateEvents: (events?: MinimalCalendarEvent[]) => boolean;
    /**
     * Determine if "no events" message should be displayed
     */
    shouldShowNoEventsMessage: (events?: MinimalCalendarEvent[]) => boolean;
};
export {};
