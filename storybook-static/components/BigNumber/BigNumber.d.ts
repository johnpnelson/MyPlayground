import { default as React } from '../../../node_modules/react';
export interface BigNumberProps {
    widgetData: IBigNumberWidgetData;
    noContentText?: string;
    hideNoContentImage?: boolean;
    onLinkClick?: (link: IBigNumberLink) => void;
    className?: string;
    widthPreference?: 'third-width' | 'half-width' | 'full-width';
    dataSource?: string;
    title?: string;
}
export interface IBigNumberWidgetData {
    content?: IBigNumberContent;
    tagName: string;
}
export interface IBigNumberContent {
    number: number | string;
    subheading: string;
    fontColor: string;
    link: IBigNumberLink;
    text?: string;
    textSize?: number;
}
export interface IBigNumberLink {
    url: string;
    text: string;
    isExternal: boolean;
}
export declare const BigNumber: React.FC<BigNumberProps>;
