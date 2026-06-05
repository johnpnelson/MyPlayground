/**
 * SimpleList Component Documentation
 *
 * A lightweight dashboard widget for displaying simple lists of links and information with support for:
 * - Single or multi-tab interfaces
 * - Scrollable content areas
 * - External and internal link handling
 * - Optional subtitles and data sources
 * - Responsive width preferences
 * - Dive links for additional navigation
 */
export declare const SimpleListDocumentation: {
    /**
     * Main component props interface
     */
    props: {
        /**
         * Widget data containing list content and metadata
         * @type ISimpleListWidgetData
         * @required false
         * @description Primary data for the component. Format: { content: {...}, subtitle: '...', tagName: '...' }
         */
        widgetData: string;
        /**
         * Data source identifier displayed above the widget title
         * @type string
         * @required false
         * @default ''
         * @description Label indicating where the data originates from (e.g., "SAP SuccessFactors", "Employee Central")
         */
        dataSource: string;
        /**
         * Text to display when no content is available
         * @type string
         * @required false
         * @default 'No content available'
         * @description Customizable message shown when rows array is empty or undefined
         */
        noContentText: string;
        /**
         * Widget title displayed in header
         * @type string
         * @required false
         * @description Main heading for the widget, displayed prominently at the top
         */
        title: string;
        /**
         * Dashboard width preference for responsive layouts
         * @type WidthPreferenceEnum
         * @required false
         * @default WidthPreferenceEnum.halfWidth
         * @description Controls widget width: halfWidth, thirdWidth, fullWidthOnly
         */
        widthPreference: string;
        /**
         * Additional CSS class for custom styling
         * @type string
         * @required false
         * @default 'simple-list-widget'
         * @description Custom CSS class applied to root element for styling overrides
         */
        className: string;
    };
    /**
     * Core data interfaces
     */
    interfaces: {
        /**
         * Widget data structure containing content and optional metadata
         */
        ISimpleListWidgetData: {
            description: string;
            properties: {
                content: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                diveLink: {
                    type: string;
                    description: string;
                };
                subtitle: {
                    type: string;
                    description: string;
                };
                tagName: {
                    type: string;
                    description: string;
                };
            };
        };
        /**
         * Content structure for each tab or single view
         */
        ISimpleListContent: {
            description: string;
            properties: {
                diveLink: {
                    type: string;
                    description: string;
                };
                rows: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                title: {
                    type: string;
                    description: string;
                };
                value: {
                    type: string;
                    description: string;
                };
                isSelected: {
                    type: string;
                    description: string;
                };
            };
        };
        /**
         * Individual list row structure
         */
        ISimpleListRow: {
            description: string;
            properties: {
                title: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                text: {
                    type: string;
                    description: string;
                };
                url: {
                    type: string;
                    description: string;
                };
                isExternal: {
                    type: string;
                    description: string;
                };
            };
        };
    };
    /**
     * Key Features
     */
    features: {
        name: string;
        description: string;
    }[];
    /**
     * Usage Examples
     */
    examples: {
        basic: string;
        tabbed: string;
        withDiveLink: string;
    };
    /**
     * Link Behavior Details
     */
    linkBehavior: {
        external: string;
        internal: string;
        validation: string;
    };
    /**
     * Styling Information
     */
    styling: {
        description: string;
        keyClasses: string[];
    };
};
export declare const SimpleListDoc: {
    title: string;
    description: string;
};
