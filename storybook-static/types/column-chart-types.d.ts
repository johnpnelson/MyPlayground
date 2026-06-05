import { WidthPreferenceEnum } from '../enums/DashboardEnums';
export interface IColumnChartOptions {
    isPercentages?: boolean;
    isMoney?: boolean;
    showLegend?: boolean;
    noDecimalsOnYAxis?: boolean;
    sharedByGroupFlag?: boolean;
    appendWithPercent?: boolean;
    showColumnTotalInTooltip?: boolean;
    noDecimalsOnYValueLabels?: boolean;
}
export interface IColumnChartSeries {
    name: string;
    data: Array<null | number>;
}
export interface IUrlAndText {
    text: string;
    url: string;
    isExternal?: boolean;
}
export interface IMasterButtonConfig {
    dropdownLabel: string;
    dropdownItems: IUrlAndText[];
}
export interface IColumnChartContent {
    diveLink?: IUrlAndText;
    series: IColumnChartSeries[];
    xAxis: {
        categories: Array<string>;
    };
    yTitle: string;
    options?: IColumnChartOptions;
    tabTitle?: string;
}
export interface IColumnChartwidgetData {
    subtitle?: string;
    content: IColumnChartContent | IColumnChartContent[];
    tagName: string;
    masterButtonConfig?: IMasterButtonConfig | IUrlAndText;
}
export interface ColumnChartProps {
    widgetData: IColumnChartwidgetData;
    noContentText?: string;
    className?: string;
    dataSource?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
}
