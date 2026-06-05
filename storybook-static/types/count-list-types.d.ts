import { WidthPreferenceEnum } from '../enums/DashboardEnums';
import { IUrlAndText, IMasterButtonConfig } from './column-chart-types';
export interface ICountListListItem {
    count: number;
    isPercent?: boolean;
    title: string | number;
    url?: string;
    text?: string | number;
}
export interface ICountListContent {
    listItems: ICountListListItem[];
    diveLink?: IUrlAndText;
    title?: string;
}
export interface IContentArrayOptions {
    toggleType?: 'tabs' | 'dropdown';
    contentDropdownLabel?: string;
}
export interface ICountListWidgetData {
    subtitle?: string;
    content: ICountListContent | ICountListContent[];
    tagName: string;
    masterButtonConfig?: IMasterButtonConfig | IUrlAndText;
    contentArrayOptions?: IContentArrayOptions;
}
export interface CountListProps {
    widgetData: ICountListWidgetData;
    noContentText?: string;
    className?: string;
    dataSource?: string;
    widthPreference?: WidthPreferenceEnum;
    title?: string;
}
