import { IUrlAndText, IMasterButtonConfig } from './column-chart-types';
import { WidthPreferenceEnum } from '../enums/DashboardEnums';
export interface ISimpleLineChartContent {
    diveLink?: IUrlAndText;
    series: ISimpleLineChartSeries[];
    xAxis: {
        categories: Array<string>;
    };
    yTitle: string;
    options?: ISimpleLineChartOptions;
    tabTitle?: string;
}
export interface ISimpleLineChartOptions {
    isPercentages?: boolean;
    isMoney?: boolean;
    noDecimalsOnYAxis?: boolean;
    showLegend?: boolean;
    useTickPositioner?: boolean;
}
export interface ISimpleLineChartSeries {
    name: string;
    data: Array<number | null>;
}
export interface SimpleLineChartProps {
    widgetData: {
        subtitle?: string;
        content: ISimpleLineChartContent | ISimpleLineChartContent[];
        tagName: string;
        masterButtonConfig?: IMasterButtonConfig | IUrlAndText;
    };
    noContentText?: string;
    className?: string;
    dataSource?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
}
