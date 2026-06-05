export interface IDonutChartWidgetData {
    content: IDonutChartContent | IDonutChartContent[];
    tagName: string;
    subtitle?: string;
}
export interface IDonutChartContent {
    donuts: IOneDonut[];
    diveLink?: IUrlAndText;
    options?: IDonutChartOptions;
    tabTitle?: string;
}
export interface IDonutChartOptions {
    isLegendOnBottom?: boolean;
    numberLegendItems?: boolean;
    isMoney?: boolean;
    innerLabel?: string;
}
export interface IOneDonut {
    slices: IDonutSlice[];
    label?: string;
    showCustomSeriesTotal?: boolean;
}
export interface IDonutSlice {
    key: string;
    value: number;
    color?: string;
    addToSeriesTotal?: boolean;
    subtractFromSeriesTotal?: boolean;
}
export interface IUrlAndText {
    url: string;
    text: string;
}
