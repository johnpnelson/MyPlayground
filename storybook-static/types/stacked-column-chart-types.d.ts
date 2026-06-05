import { IUrlAndText, IMasterButtonConfig } from './column-chart-types';
import { WidthPreferenceEnum } from '../enums/DashboardEnums';
export interface IStackedColumnChartOptions {
    numbersInStacks?: boolean;
    isMoney?: boolean;
    showColumnTotalInTooltip?: boolean;
    isLegendOnBottom?: boolean;
    isPercentages?: boolean;
    showLegend?: boolean;
    noDecimalsOnYAxis?: boolean;
    sharedByGroupFlag?: boolean;
}
export interface IStackedColumnChartSeries {
    name: string;
    data: Array<null | number>;
}
export interface IStackedColumnChartContent {
    diveLink?: IUrlAndText;
    series: IStackedColumnChartSeries[];
    xAxis: {
        categories: Array<string>;
    };
    yTitle: string;
    options?: IStackedColumnChartOptions;
    tabTitle?: string;
}
export interface IStackedColumnChartWidgetData {
    subtitle?: string;
    content: IStackedColumnChartContent | IStackedColumnChartContent[];
    tagName: string;
    masterButtonConfig?: IMasterButtonConfig | IUrlAndText;
}
export interface StackedColumnChartProps {
    widgetData: IStackedColumnChartWidgetData;
    noContentText?: string;
    className?: string;
    dataSource?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
}
