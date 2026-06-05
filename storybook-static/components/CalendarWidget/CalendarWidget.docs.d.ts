/**
 * CalendarWidget Component Documentation
 *
 * A comprehensive calendar widget component for displaying events with badges, custom popover content,
 * and interactive navigation. Supports responsive layouts and flexible styling options following
 * the repository's standard widgetData pattern and width preference system.
 */
export declare const CalendarWidgetDocumentation: {
    overview: string;
    props: {
        widgetData: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
        noContentText: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
        title: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
        className: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
        widthPreference: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
            note: string;
        };
        dataSource: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
        height: {
            type: string;
            required: boolean;
            default: string;
            description: string;
            example: string;
        };
    };
    /**
     * Detailed interface and type documentation
     * Each interface documented with comprehensive property-level details
     */
    interfaces: {
        CalendarWidgetProps: {
            title: string;
            description: string;
            genericType: string;
            note: string;
            properties: {
                widgetData: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                noContentText: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                title: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                className: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                widthPreference: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                    values: {
                        fullWidthOnly: string;
                        halfWidth: string;
                        thirdWidth: string;
                    };
                };
                dataSource: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                height: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
            };
            example: string;
        };
        ICalendarWidgetData: {
            title: string;
            description: string;
            genericType: string;
            properties: {
                events: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                legends: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                options: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                actions: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
            };
            example: string;
        };
        ICalendarWidgetOptions: {
            title: string;
            description: string;
            properties: {
                numberOfMonths: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                fromDate: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                toDate: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                responsive: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                responsiveMinMonths: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                responsiveMaxMonths: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                responsiveMonthWidth: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                navigationStep: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                config: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                noEventsText: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                showNonWorkDayCheckbox: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                showNavButton: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
            };
            example: string;
        };
        ICalendarWidgetActions: {
            title: string;
            description: string;
            properties: {
                onNavClick: {
                    type: string;
                    required: boolean;
                    description: string;
                    details: string;
                };
                onNonWorkDayToggle: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                popoverBodyComponent: {
                    type: string;
                    required: boolean;
                    description: string;
                    parameters: {
                        event: string;
                        closePopover: string;
                    };
                };
            };
            example: string;
        };
        ICalendarEventWithBadge: {
            title: string;
            description: string;
            genericType: string;
            inherits: string;
            baseProperties: {
                id: string;
                title: string;
                start: string;
                end: string;
                allDay: string;
            };
            additionalProperties: {
                eventDetail: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                extendedProps: {
                    type: string;
                    required: boolean;
                    description: string;
                };
            };
            example: string;
        };
        IEventDetailItem: {
            title: string;
            description: string;
            properties: {
                icon: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                iconStyle: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                    values: {
                        solid: string;
                        light: string;
                        regular: string;
                        brands: string;
                    };
                };
                iconColor: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                title: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                description: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                truncate: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                tooltip: {
                    type: string;
                    required: boolean;
                    description: string;
                };
            };
            example: string;
        };
        IContentFragment: {
            title: string;
            description: string;
            properties: {
                type: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                value: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                iconStyle: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                style: {
                    type: string;
                    required: boolean;
                    description: string;
                };
            };
            example: string;
        };
        IBadgeLegend: {
            title: string;
            description: string;
            properties: {
                badge: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                badgeColor: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                badgeTextColor: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                visible: {
                    type: string;
                    required: boolean;
                    description: string;
                };
                label: {
                    type: string;
                    required: boolean;
                    description: string;
                };
            };
            example: string;
        };
        IDefaultExtendedProps: {
            title: string;
            description: string;
            properties: {
                badge: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                badgeColor: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                badgeTextColor: {
                    type: string;
                    required: boolean;
                    default: string;
                    description: string;
                };
                description: {
                    type: string;
                    required: boolean;
                    description: string;
                };
            };
            note: string;
            example: string;
        };
    };
    types: {
        IContentFragment: {
            description: string;
            properties: {
                type: string;
                value: string;
                iconStyle: string;
                style: string;
            };
            example: string;
        };
        IEventDetailItem: {
            description: string;
            properties: {
                icon: string;
                iconColor: string;
                iconStyle: string;
                title: string;
                description: string;
                truncate: string;
                tooltip: string;
            };
            example: string;
        };
        IBadgeLegend: {
            description: string;
            properties: {
                badge: string;
                badgeColor: string;
                badgeTextColor: string;
                visible: string;
                label: string;
            };
            example: string;
        };
        ICalendarEventWithBadge: {
            description: string;
            properties: {
                eventDetail: string;
                extendedProps: string;
            };
            example: string;
        };
    };
    usage: {
        basic: string;
        withStructuredContent: string;
        withLegendsAndFooter: string;
        withWidgetData: string;
        responsiveLayout: string;
        asyncNavigation: string;
        customPopover: string;
        genericExtendedProps: string;
    };
    usagePatterns: {
        dataVsConfig: {
            title: string;
            description: string;
            content: string;
        };
        widthPreferences: {
            title: string;
            description: string;
            content: string;
        };
        eventValidation: {
            title: string;
            description: string;
            content: string;
        };
        footerBehavior: {
            title: string;
            description: string;
            content: string;
        };
        navigationBehavior: {
            title: string;
            description: string;
            content: string;
        };
    };
    /**
     * Integration and advanced topics
     */
    integration: {
        title: string;
        widgetDataPattern: {
            title: string;
            description: string;
            benefits: string[];
        };
        genericTyping: {
            title: string;
            description: string;
            example: string;
        };
        iconLibraries: {
            title: string;
            description: string;
            values: {
                solid: string;
                light: string;
                regular: string;
                brands: string;
            };
        };
    };
    /**
     * Exported types and components
     */
    exports: {
        title: string;
        description: string;
        items: string[];
    };
    notes: {
        title: string;
        items: string[];
    };
};
