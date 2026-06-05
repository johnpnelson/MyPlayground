import { IUrlAndText } from '../../types/common';
import { WidthPreferenceEnum } from '../../enums/DashboardEnums';
export interface SimpleListProps {
    widgetData?: ISimpleListWidgetData;
    dataSource?: string;
    noContentText?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
    className?: string;
}
export interface ISimpleListWidgetData {
    content: ISimpleListContent | ISimpleListContent[];
    subtitle?: string;
    tagName?: string;
}
export interface ISimpleListContent {
    diveLink?: IUrlAndText;
    rows: ISimpleListRow[];
    title?: string;
    value?: string;
    isSelected?: boolean;
}
export interface ISimpleListRow {
    title: string;
    text?: string;
    url?: string;
    isExternal?: boolean;
}
