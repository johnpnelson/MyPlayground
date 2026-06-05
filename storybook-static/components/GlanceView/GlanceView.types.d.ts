export interface GlanceViewProps {
    widgetData?: IGlanceViewWidgetData;
    noContentText?: string;
    title?: string;
    dataSource?: string;
    className?: string;
}
export interface IGlanceViewWidgetData {
    content: IGlanceViewContent;
    tagName: string;
    subtitle?: string;
}
export interface IGlanceViewContent {
    left?: DisplayData[];
    right?: DisplayData[];
    diveLink?: IUrlAndText;
}
export interface IUrlAndText {
    text: string;
    url: string;
    isExternal?: boolean;
    style?: string;
}
export interface DisplayData {
    fields?: DisplayField[];
}
export interface DisplayField {
    value?: string;
    icon?: string;
    subtitle?: string;
    valueStyles?: string;
    subtitleStyles?: string;
    badgeText?: string;
    badgeStyles?: string;
    isEmail?: boolean;
    diveLink?: IUrlAndText;
}
