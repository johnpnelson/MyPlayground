import { ColorCategoriesEnum } from '../enums/DashboardEnums';
export interface IUrlAndText {
    text: string;
    url: string;
    isExternal?: boolean;
    style?: string;
}
export type IDashColorCategory = keyof typeof ColorCategoriesEnum;
