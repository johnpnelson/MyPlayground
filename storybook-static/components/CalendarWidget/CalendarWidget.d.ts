import { default as React } from '../../../node_modules/react';
import { CalendarWidgetProps } from './CalendarWidget.types';
/**
 * CalendarWidget Component
 *
 * A wrapper around @frontline/hcm-react-calendar that provides:
 * - Badge support for event status display
 * - Responsive multi-month view
 * - Custom event details popover with structured content
 * - Event validation and error handling
 *
 * @example
 * ```tsx
 * const events = [
 *   {
 *     id: '1',
 *     title: 'Team Meeting',
 *     start: '2026-02-03T09:00:00',
 *     eventDetail: [
 *       {
 *         icon: 'faMapMarkerAlt',
 *         iconStyle: 'solid',
 *         title: 'Location',
 *         description: 'Conference Room A',
 *         truncate: false
 *       }
 *     ],
 *     extendedProps: {
 *       badge: 'IP',
 *       badgeColor: '#F6DC6B',
 *       badgeTextColor: '#000000'
 *     }
 *   }
 * ];
 *
 * <CalendarWidget
 *   widgetData={{
 *     events: events,
 *     options: {
 *       responsive: true,
 *       responsiveMinMonths: 2
 *     }
 *   }}
 * />
 * ```
 */
export declare const CalendarWidget: React.FC<CalendarWidgetProps>;
export default CalendarWidget;
