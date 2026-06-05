import { ActionListProps, IActionListContent, IActionListItem, IActionButton, IActionListStatus, IActionListFilterOption, IMasterButtonConfig } from './ActionList.types';
import { IDashColorCategory } from '../../types/common';
import { WidthPreferenceEnum } from '../../enums/DashboardEnums';
export declare const ActionListDocumentation: {
    /**
     * Main component props interface
     */
    props: {
        /**
         * Widget data - can be a single content object or array for multi-tab interface
         * @type IActionListContent | IActionListContent[]
         * @required false
         * @description Primary data for the component. Single object creates one view, array creates tabbed interface
         */
        widgetData: string;
        /**
         * Data source identifier displayed above the widget title
         * @type string
         * @required false
         * @description Label indicating where the data originates from (e.g., "Employee Central", "Professional Growth")
         */
        dataSource: string;
        /**
         * Widget subtitle displayed below the title and filter controls
         * @type string
         * @required false
         * @description Additional context or description for the widget content
         */
        subtitle: string;
        /**
         * Text to display when no content is available
         * @type string
         * @required false
         * @default 'No content available'
         * @description Customizable message shown when listItems are empty or undefined
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
         * Configuration for master button dropdown in header
         * @type IMasterButtonConfig
         * @required false
         * @description Adds global action dropdown to widget header
         */
        masterButtonConfig: string;
        /**
         * Additional CSS class for custom styling
         * @type string
         * @required false
         * @default 'action-list-widget'
         * @description Custom CSS class applied to root element for styling overrides
         */
        className: string;
    };
    /**
     * Core data interfaces
     */
    interfaces: {
        /**
         * Main content structure for each tab or single view
         */
        IActionListContent: {
            description: string;
            properties: {
                diveLink: {
                    type: string;
                    description: string;
                };
                listItems: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                actionListFilterOptions: {
                    type: string;
                    description: string;
                };
                title: {
                    type: string;
                    description: string;
                };
                sortFunction: {
                    type: string;
                    description: string;
                };
            };
        };
        /**
         * Individual list item structure
         */
        IActionListItem: {
            description: string;
            properties: {
                action: {
                    type: string;
                    description: string;
                };
                desc: {
                    type: string;
                    description: string;
                };
                subtitle: {
                    type: string;
                    description: string;
                };
                subtitleSecondRow: {
                    type: string;
                    description: string;
                };
                status: {
                    type: string;
                    description: string;
                };
                rowButton: {
                    type: string;
                    description: string;
                };
                dropdownItems: {
                    type: string;
                    description: string;
                };
                extraActionButton: {
                    type: string;
                    description: string;
                };
                title: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                titleLink: {
                    type: string;
                    description: string;
                };
            };
        };
        /**
         * Filter/sort option configuration
         */
        IActionListFilterOption: {
            description: string;
            properties: {
                name: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                value: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                isDefault: {
                    type: string;
                    description: string;
                    required: boolean;
                };
            };
        };
        /**
         * Status indicator configuration
         */
        IActionListStatus: {
            description: string;
            properties: {
                label: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                value: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                statusColorCategory: {
                    type: string;
                    description: string;
                };
                statusColorClass: {
                    type: string;
                    description: string;
                };
            };
            notes: string[];
        };
        /**
         * Action button configuration
         */
        IActionButton: {
            description: string;
            properties: {
                text: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                url: {
                    type: string;
                    description: string;
                };
                actionType: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                action: {
                    type: string;
                    description: string;
                };
                actionFunction: {
                    type: string;
                    description: string;
                };
                isExternal: {
                    type: string;
                    description: string;
                };
            };
        };
        /**
         * Master button dropdown configuration
         */
        IMasterButtonConfig: {
            description: string;
            properties: {
                dropdownLabel: {
                    type: string;
                    description: string;
                    required: boolean;
                };
                dropdownItems: {
                    type: string;
                    description: string;
                    required: boolean;
                };
            };
        };
    };
    /**
     * Basic usage examples
     */
    examples: {
        /**
         * Simple single-tab list with basic items
         */
        basic: {
            title: string;
            description: string;
            code: string;
        };
        /**
         * Multi-tab interface with status indicators and filtering
         */
        multiTab: {
            title: string;
            description: string;
            code: string;
        };
        /**
         * Advanced configuration with custom styling
         */
        advanced: {
            title: string;
            description: string;
            code: string;
        };
        /**
         * Legacy advanced configuration example
         */
        legacyAdvanced: {
            title: string;
            description: string;
            code: string;
        };
        /**
         * No content state example
         */
        noContent: {
            title: string;
            description: string;
            code: string;
        };
    };
    /**
     * Best practices and usage guidelines
     */
    bestPractices: {
        dataStructure: string[];
        performance: string[];
        accessibility: string[];
        styling: string[];
        filtering: string[];
    };
    /**
     * Common patterns and use cases
     */
    useCases: {
        dashboard: string;
        notifications: string;
        workflowTasks: string;
        projectManagement: string;
        reports: string;
        settings: string;
        staffManagement: string;
        recentActivity: string;
        taskQueues: string;
    };
    /**
     * Integration notes
     */
    integration: {
        dependencies: string[];
        styling: string[];
        testing: string[];
    };
};
export type { ActionListProps, IActionListContent, IActionListItem, IActionButton, IActionListStatus, IActionListFilterOption, IMasterButtonConfig, IDashColorCategory, };
export { WidthPreferenceEnum };
