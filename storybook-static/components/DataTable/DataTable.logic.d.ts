import { IDataTableContent, IDataTableListItem } from './DataTable.types';
export declare const dataTableLogic: {
    shouldShowNoContentMessage: (content?: IDataTableContent) => boolean;
    makeOwnColumnHeaders: (data: IDataTableListItem[]) => string[];
    addNumberToColumnHeaders: (tabData: IDataTableContent) => Record<string, string>;
    validateTabLinks: (tab: IDataTableContent) => boolean;
    validateLink: (url: string) => boolean;
    getContentArray: (content: IDataTableContent | IDataTableContent[]) => IDataTableContent[];
    hasMultipleContent: (content: IDataTableContent | IDataTableContent[]) => boolean;
};
