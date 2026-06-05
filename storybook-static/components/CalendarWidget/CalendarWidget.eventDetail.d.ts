type CalendarPopoverEvent = Record<string, unknown> & {
    eventType?: unknown;
    eventDetail?: unknown;
};
/**
 * This function normalizes raw CalendarApiEvent details into
 * supported event type popover content or a generic normalized format
 */
export declare const normalizeEventForBuiltInPopover: <T extends CalendarPopoverEvent>(event: T) => T;
export {};
