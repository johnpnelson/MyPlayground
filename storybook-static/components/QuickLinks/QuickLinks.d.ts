import { default as React } from '../../../node_modules/react';
import { IUrlAndText } from '../../types/common';
export interface QuickLinksProps {
    widgetData: IQuickLinksWidgetData;
    noContentText?: string;
    hideNoContentImage?: boolean;
    onLinkClick?: (link: IQuickLinksLink) => void;
    className?: string;
    alignment?: 'vertical' | 'horizontal';
}
export interface IQuickLinksWidgetData {
    content: IQuickLinksContent;
    tagName: string;
    subtitle?: string;
}
export interface IQuickLinksContent {
    links: IQuickLinksLink[];
}
export interface IQuickLinksLink {
    icon?: string | null;
    iconColor: string;
    isExternal: boolean;
    linkIdentifier: string;
    subtitle: string;
    title: string;
    url: IUrlAndText;
}
export declare const QuickLinks: React.FC<QuickLinksProps>;
