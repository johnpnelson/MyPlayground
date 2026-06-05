import { default as React } from '../../../node_modules/react';
export interface NewsFeedProps {
    widgetData?: INewsFeedWidgetData;
    noContentText?: string;
    className?: string;
    title?: string;
}
export interface INewsFeedWidgetData {
    content: INewsFeedContent;
    tagName: string;
    subtitle?: string;
}
export interface INewsFeedContent {
    announcements: INewsFeedAnnouncement[];
}
export interface INewsFeedAnnouncement {
    nav: string;
    body: string;
    link?: INewsFeedLink;
}
export interface INewsFeedLink {
    url: string;
    text: string;
    isExternal: boolean;
}
export declare const NewsFeed: React.FC<NewsFeedProps>;
