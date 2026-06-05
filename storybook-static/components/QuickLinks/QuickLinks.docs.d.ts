/**
 * QuickLinks Component Documentation
 *
 * This file contains comprehensive documentation for the QuickLinks component
 * including usage examples, props documentation, styling customization,
 * and CSS variable overrides.
 */
export declare const QuickLinksDocumentation: {
    overview: string;
    usage: {
        basic: string;
        withCallback: string;
        customStyling: string;
    };
    props: {
        widgetData: {
            type: string;
            description: string;
            required: boolean;
            example: string;
        };
        noContentText: {
            type: string;
            description: string;
            required: boolean;
            default: string;
            example: string;
        };
        hideNoContentImage: {
            type: string;
            description: string;
            required: boolean;
            default: string;
            example: string;
        };
        onLinkClick: {
            type: string;
            description: string;
            required: boolean;
            example: string;
        };
        className: {
            type: string;
            description: string;
            required: boolean;
            default: string;
            example: string;
            note: string;
        };
        alignment: {
            type: string;
            description: string;
            required: boolean;
            default: string;
            example: string;
        };
    };
    interfaces: {
        IQuickLinksContent: string;
        IQuickLinksLink: string;
        IUrlAndText: string;
    };
    styling: {
        overview: string;
        cssVariables: {
            description: string;
            variables: {
                '$quick-links-icon-size': {
                    default: string;
                    description: string;
                };
                '$quick-links-link-height': {
                    default: string;
                    description: string;
                };
                '$quick-links-margin-top': {
                    default: string;
                    description: string;
                };
                '$quick-links-link-margin-bottom': {
                    default: string;
                    description: string;
                };
                '$quick-links-link-vertical-padding': {
                    default: string;
                    description: string;
                };
                '$quick-links-link-horizontal-padding': {
                    default: string;
                    description: string;
                };
                '$quick-links-bg-color': {
                    default: string;
                    description: string;
                };
                '$quick-links-border-color': {
                    default: string;
                    description: string;
                };
                '$quick-links-hover-border-color': {
                    default: string;
                    description: string;
                };
                '$quick-links-text-color': {
                    default: string;
                    description: string;
                };
                '$quick-links-border-radius': {
                    default: string;
                    description: string;
                };
                '$quick-links-box-shadow': {
                    default: string;
                    description: string;
                };
                '$quick-links-font-size': {
                    default: string;
                    description: string;
                };
                '$quick-links-subtitle-font-size': {
                    default: string;
                    description: string;
                };
                '$quick-links-icon-font-size': {
                    default: string;
                    description: string;
                };
            };
        };
        customization: {
            variableOverride: string;
            customClasses: string;
            globalThemeOverride: string;
        };
    };
    accessibility: {
        features: string[];
        guidelines: string;
    };
    validation: {
        urlValidation: string;
        errorHandling: string;
    };
    examples: {
        basicUsage: {
            title: string;
            description: string;
            code: string;
        };
        customStyling: {
            title: string;
            description: string;
            code: string;
        };
        withInteraction: {
            title: string;
            description: string;
            code: string;
        };
        horizontalAlignment: {
            title: string;
            description: string;
            code: string;
        };
    };
    troubleshooting: {
        commonIssues: {
            'Icons not displaying': {
                problem: string;
                solution: string;
            };
            'Styles not applying': {
                problem: string;
                solution: string;
            };
            'Links not clickable': {
                problem: string;
                solution: string;
            };
            'URL validation errors': {
                problem: string;
                solution: string;
            };
        };
    };
};
export default QuickLinksDocumentation;
