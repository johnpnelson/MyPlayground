import { IUrlAndText } from '../../types/common';
import { ColorCategoriesEnum, WidthPreferenceEnum } from '../../enums/DashboardEnums';
export interface IDataTableConfig {
    title?: string;
    subtitle?: string;
    content: IDataTableContent | IDataTableContent[];
    masterButtonConfig?: {
        text: string;
        url?: string;
        clickAction?: string;
        class?: string;
    };
    contentArrayOptions?: {
        contentDropdownLabel?: string;
        toggleType?: 'tabs' | 'dropdown';
    };
}
export interface IDataTableContent {
    title?: string;
    subtitle?: string;
    listItems: IDataTableListItem[];
    columnTitles: string[];
    diveLink?: IUrlAndText;
    options?: IDataTableOptions;
}
export interface IDataTableListItem {
    [key: string]: {
        title: string | number;
        text?: string | number;
        url?: string;
        isBold?: boolean;
    };
}
export type ColumnAlignment = 'left' | 'right' | 'center';
export interface IDataTableOptions {
    boldStatColumns?: boolean;
    columnTitleColorClass?: ColorCategoriesEnum;
    darkStatColumnTitles?: boolean;
    calculateColumnTotals?: boolean;
    hideAllColumnTitles?: boolean;
    hideFirstColumnTitle?: boolean;
    showBands?: boolean;
    topBorder?: boolean;
    columnAlignments?: Record<string, ColumnAlignment>;
}
export interface DataTableProps {
    widgetData: IDataTableConfig;
    noContentText?: string;
    title?: string;
    className?: string;
    widthPreference?: WidthPreferenceEnum;
    dataSource?: string;
    isDynamicHeight?: boolean;
}
