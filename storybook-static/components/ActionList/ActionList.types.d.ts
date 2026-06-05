import { IUrlAndText, IDashColorCategory } from '../../types/common';
import { WidthPreferenceEnum } from '../../enums/DashboardEnums';
export interface ActionListProps {
    widgetData: IActionListWidgetData;
    dataSource?: string;
    noContentText?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
    masterButtonConfig?: IMasterButtonConfig;
    className?: string;
    onSortChange?: (sortValue: string) => void;
    refreshSource?: string;
    fetchData?: (url: string) => Promise<IActionListWidgetData>;
    isLoading?: boolean;
    onLoadingChange?: (isLoading: boolean) => void;
    subtitle?: string;
    isDynamicHeight?: boolean;
}
export interface IActionListWidgetData {
    content: IActionListContent | IActionListContent[];
    tagName: string;
    actionListFilterOptions?: IActionListFilterOption[];
    catalogUrl?: string;
    titleTemplate?: string;
    refreshSource?: string;
    subtitle?: string;
}
export interface IActionListContent {
    diveLink?: IUrlAndText;
    listItems: IActionListItem[];
    actionListFilterOptions?: IActionListFilterOption[];
    title?: string;
    value?: string;
    isSelected?: boolean;
}
export interface IActionListFilterOption {
    name: string;
    value: string;
    isDefault?: boolean;
    isSelected?: boolean;
    ariaLabel?: string;
}
export interface IActionListStatus {
    label: string;
    value: string;
    statusColorCategory?: IDashColorCategory;
    statusColorClass?: string;
}
export interface IActionListItem {
    action?: string;
    desc?: string;
    subtitle?: string;
    subtitleSecondRow?: string;
    status?: IActionListStatus;
    rowButton?: IActionButton;
    dropdownItems?: IActionButton[];
    extraActionButton?: IActionButton;
    title: string;
    titleLink?: string;
    diveLink?: IUrlAndText;
}
export interface IActionButton {
    text: string;
    url?: string;
    actionType: 'link' | 'button' | 'disabled' | 'get' | 'post' | 'patch' | 'delete';
    action?: any;
    actionFunction?: (...params: any[]) => any;
    isExternal?: boolean;
}
export interface IMasterButtonConfig {
    dropdownLabel: string;
    dropdownItems: IUrlAndText[];
}
