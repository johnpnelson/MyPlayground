import { IActionListContent, IActionListItem, IActionButton, IActionListWidgetData, IActionListFilterOption } from './ActionList.types';
export declare const actionListLogic: {
    shouldShowNoContentMessage: (content?: IActionListContent) => boolean;
    parseTabTitle: (title: string | undefined) => {
        displayTitle: string;
        count?: number;
    };
    formatDate: (dateString: string, formatPattern: string) => string;
    parseTemplateString: (input: string | undefined) => string;
    extractWidgetData: (data: IActionListWidgetData | undefined) => {
        content: IActionListContent[];
        filterOptions?: IActionListFilterOption[];
        refreshSource?: string;
    };
    getInitialSelectedTabIndex: (content: IActionListContent[]) => number;
    getDefaultSortValue: (filterOptions?: IActionListFilterOption[], selectedSortValue?: string) => string;
    buildRefreshUrl: (refreshSource: string, sortValue: string) => string;
    applyStatusColorClasses: (items: IActionListItem[]) => IActionListItem[];
    checkDropdownHasValidItem: (dropdownItems?: IActionButton[]) => boolean;
    processContentData: (content: IActionListContent) => IActionListContent;
    openLink: (item: IActionButton) => void;
    handleAction: (item: IActionButton) => void;
};
