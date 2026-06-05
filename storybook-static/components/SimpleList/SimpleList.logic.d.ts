import { ISimpleListContent, ISimpleListRow, ISimpleListWidgetData } from './SimpleList.types';
export declare const simpleListLogic: {
    /**
     * Validate that all URLs in rows start with http:// or https://
     * Logs warnings for invalid URLs
     */
    validateLinks: (rows: ISimpleListRow[]) => void;
    /**
     * Extract widget data - normalize single or array content format
     */
    extractWidgetData: (data: ISimpleListWidgetData | undefined) => {
        content: ISimpleListContent[];
    };
    /**
     * Get the initial selected tab index
     */
    getInitialSelectedTabIndex: (content: ISimpleListContent[]) => number;
    /**
     * Parse tab title - supports simple string or JSON array format
     */
    parseTabTitle: (title: string | undefined) => {
        displayTitle: string;
    };
    /**
     * Check if content should show no content message
     */
    shouldShowNoContentMessage: (content?: ISimpleListContent) => boolean;
    /**
     * Open link with appropriate target behavior
     */
    openLink: (url: string, isExternal?: boolean) => void;
};
