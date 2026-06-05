export interface HeatMapCell {
    columnHeading: string;
    value: number;
    text?: string;
}
export interface HeatMapRow {
    rowTitle: string;
    cells: HeatMapCell[];
}
export interface IHeatMapWidgetData {
    content: IHeatMapContent | IHeatMapContent[];
    tagName: string;
    subtitle?: string;
}
export interface IHeatMapContent {
    listItems: HeatMapRow[];
    diveLink?: IUrlAndText;
    tabTitle?: string;
}
export interface HeatMapSeriesData {
    x: number;
    y: number;
    value: number;
    name?: string;
}
export interface IUrlAndText {
    url: string;
    text: string;
    isExternal?: boolean;
}
