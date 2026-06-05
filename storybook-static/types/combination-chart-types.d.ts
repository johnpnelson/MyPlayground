import { IUrlAndText, IMasterButtonConfig } from './column-chart-types';
import { WidthPreferenceEnum } from '../enums/DashboardEnums';
export interface ICombinationChartContent {
    diveLink?: IUrlAndText;
    series: Array<ICombinationColumnSeries | ILineChartSeries>;
    xAxis: {
        categories: Array<string>;
    };
    yAxis: ICombinationYAxis[];
    options?: ICombinationChartOptions;
    tabTitle?: string;
}
export interface ICombinationChartOptions {
    isPercentages?: boolean;
    showLegend?: boolean;
    noDecimalsOnYAxis?: boolean;
    showGroupedTooltip?: boolean;
}
export interface ICombinationYAxis {
    gridLineWidth?: number;
    labels?: {
        format?: string;
    };
    title: {
        text: string;
    };
    isMoney?: boolean;
    opposite?: boolean;
}
export interface ICombinationColumnSeries {
    name: string;
    type: 'column';
    yAxis?: number;
    data: Array<number | null>;
    tooltip?: {
        valueSuffix?: string;
    };
}
export interface ILineChartSeries {
    name: string;
    type: 'line' | 'spline';
    yAxis?: number;
    data: Array<number | null>;
    marker?: {
        enabled?: boolean;
    };
    dashStyle?: 'Solid' | 'ShortDash' | 'ShortDot' | 'ShortDashDot' | 'ShortDashDotDot' | 'Dot' | 'Dash' | 'LongDash' | 'DashDot' | 'LongDashDot' | 'LongDashDotDot';
    tooltip?: {
        valueSuffix?: string;
    };
}
export interface CombinationChartProps {
    widgetData: {
        subtitle?: string;
        content: ICombinationChartContent | ICombinationChartContent[];
        tagName: string;
        masterButtonConfig?: IMasterButtonConfig | IUrlAndText;
    };
    noContentText?: string;
    className?: string;
    dataSource?: string;
    title?: string;
    widthPreference?: WidthPreferenceEnum;
}
