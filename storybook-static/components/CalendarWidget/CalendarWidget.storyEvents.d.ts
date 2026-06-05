import { ICalendarEventWithBadge } from './CalendarWidget.types';
import { CalendarApiEvent } from '../../types/calendar-api-event';
export declare const rollingThreeMonthOptions: {
    readonly numberOfMonths: 3;
    readonly fromDate: string;
    readonly toDate: string;
};
export declare const secureClientPopoverEvents: ICalendarEventWithBadge[];
export declare const originalEvents: CalendarApiEvent[];
export declare const sharedWidgetStoryEvents: CalendarApiEvent[];
export declare const substituteJobsEvents: CalendarApiEvent[];
export declare const absencesEvents: CalendarApiEvent[];
export declare const timesheetEvents: CalendarApiEvent[];
