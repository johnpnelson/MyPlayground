/**
 * NewsFeed Component Documentation
 *
 * This file contains comprehensive documentation for the NewsFeed component
 * including usage examples, props documentation, styling customization,
 * and CSS variable overrides.
 */
export declare const NewsFeedDocumentation: {
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
        };
    };
    interfaces: {
        INewsFeedContent: string;
        INewsFeedAnnouncement: string;
        INewsFeedLink: string;
        IUrlAndText: string;
    };
    styling: {
        overview: string;
        cssVariables: {
            description: string;
            variables: {
                '$news-feed-min-height': {
                    default: string;
                    description: string;
                };
                '$news-feed-margin': {
                    default: string;
                    description: string;
                };
                '$news-feed-nav-font-size': {
                    default: string;
                    description: string;
                };
                '$news-feed-nav-margin-bottom': {
                    default: string;
                    description: string;
                };
                '$news-feed-nav-button-padding': {
                    default: string;
                    description: string;
                };
                '$news-feed-body-line-height': {
                    default: string;
                    description: string;
                };
                '$news-feed-link-margin-top': {
                    default: string;
                    description: string;
                };
                '$news-feed-link-font-size': {
                    default: string;
                    description: string;
                };
                '$news-feed-link-color': {
                    default: string;
                    description: string;
                };
            };
        };
        customization: {
            variableOverride: string;
            customClasses: string;
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
        withHtmlContent: {
            title: string;
            description: string;
            code: string;
        };
        withInteraction: {
            title: string;
            description: string;
            code: string;
        };
        customStyling: {
            title: string;
            description: string;
            code: string;
        };
    };
    troubleshooting: {
        commonIssues: {
            'Navigation not working': {
                problem: string;
                solution: string;
            };
            'Dates not formatting': {
                problem: string;
                solution: string;
            };
            'HTML not rendering': {
                problem: string;
                solution: string;
            };
            'Links not working': {
                problem: string;
                solution: string;
            };
            'Security warnings': {
                problem: string;
                solution: string;
            };
        };
        performanceNotes: {
            'Large announcement lists': string;
            'HTML content': string;
            'Date formatting': string;
        };
    };
};
export default NewsFeedDocumentation;
