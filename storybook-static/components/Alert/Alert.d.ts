import { default as React } from '../../../node_modules/react';
export interface AlertProps {
    widgetData?: IAlertContent;
    noContentText?: string;
    hideNoContentImage?: boolean;
    onLinkClick?: (link: IAlertLink) => void;
    onDismiss?: (alertId: string) => void;
    className?: string;
    dismissible?: boolean;
    disableLocalStorage?: boolean;
}
export interface IAlertContent {
    id: string;
    alertLevel: number;
    contentLeft?: IAlertSection;
    contentMiddle?: IAlertSection;
    contentRight?: IAlertSection;
    tagName: string;
    dismissable?: boolean;
}
export interface IAlertSection {
    body: string;
    ssIconBefore?: string;
    ssIconAfter?: string;
}
export interface IAlertLink {
    url: string;
    text: string;
    isExternal: boolean;
}
export declare const Alert: React.FC<AlertProps>;
