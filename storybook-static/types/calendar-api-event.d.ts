export type CalendarApiEventType = 'Closed' | 'InService' | 'Absence' | 'Job' | 'AvailableJob' | 'Holiday' | 'Reschedule' | 'Calamity' | 'DaysOff' | 'NonWorkDay';
export interface EventInstitute {
    id: number;
    name: string;
    phone?: string | null;
    addressString?: string | null;
    address?: {
        address1?: string | null;
        address2?: string | null;
        city?: string | null;
        state?: string | null;
        zipCode?: string | null;
    } | null;
}
export declare const UserTypeEnum: {
    readonly csRep: 0;
    readonly institutionAdministrator: 1;
    readonly org: 4;
    readonly campus: 5;
    readonly worker: 2;
    readonly substitute: 3;
    readonly organizationParentUser: 7;
    readonly multiOrgSubstitute: 9;
};
export type TUserType = (typeof UserTypeEnum)[keyof typeof UserTypeEnum];
export interface AbsenceUser {
    name?: string | null;
    userRequired?: boolean;
    userType?: TUserType | null;
}
export interface TimesheetEvent {
    isPaid?: boolean | null;
    appliesToOvertime?: boolean;
}
export declare const ShiftTypeEnum: {
    readonly FullDay: 1;
    readonly HalfDayMorning: 2;
    readonly HalfDayAfternoon: 3;
    readonly Custom: 4;
};
export type TShiftType = (typeof ShiftTypeEnum)[keyof typeof ShiftTypeEnum];
export interface EventDetail {
    workerName?: string | null;
    shiftType?: TShiftType | string | null;
    duration?: string | null;
    workerTypes?: Array<{
        id: number;
        description: string;
    }> | null;
    institutes?: Array<EventInstitute> | null;
    reason?: string | null;
    absenceUser?: AbsenceUser;
    timesheetEvent?: TimesheetEvent;
    rescheduleDate?: string | null;
}
export interface CalendarApiEvent {
    id: number;
    title: string;
    start: string;
    end?: string;
    eventType: CalendarApiEventType;
    eventDetail?: EventDetail;
}
/**
 * Options returned by the calendar API endpoint.
 * Controls how many months are displayed and the visible date range.
 */
export interface ICalendarApiOptions {
    /** Number of months to display side-by-side */
    numberOfMonths?: number;
    /** Start date for the calendar view range (ISO date string, e.g. '2026-02-22') */
    fromDate?: string;
    /** End date for the calendar view range (ISO date string, e.g. '2026-06-07') */
    toDate?: string;
}
/**
 * Full API response shape for the calendar widget.
 *
 * @example
 * ```ts
 * const response: ICalendarApiResponse = await fetch('/api/calendar').then(r => r.json());
 *
 * <CalendarWidget
 *   widgetData={{
 *     events: response.content.events,
 *     options: response.options,
 *     actions: { popoverBodyComponent: MyPopover },
 *   }}
 * />
 * ```
 */
export interface ICalendarApiResponse {
    tagName: string;
    content: {
        events: CalendarApiEvent[];
    };
    options?: ICalendarApiOptions;
}
