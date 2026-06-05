import { default as Highcharts } from 'highcharts';
import { IDonutChartContent, IDonutChartOptions, IOneDonut } from '../types/donut-chart';
export declare const shouldShowNoContentMessage: (content?: IDonutChartContent) => boolean;
export declare const getColorPalette: () => string[];
export declare const getTextColor: () => string;
export declare const getSeriesLabel: (config: {
    seriesTotal: number;
    center: [string, string];
    isMoney?: boolean;
    innerLabel?: string;
}) => {
    name: string;
    size: string;
    data: number[];
    center: [string, string];
    enableMouseTracking: boolean;
    dataLabels: {
        formatter: (this: Highcharts.Point) => string;
        useHTML: boolean;
        distance: number;
        x: number;
        verticalAlign: string;
        crop: boolean;
        overflow: string;
    };
};
export declare const getDonutSize: (count: number) => string;
export declare const multipleDonutSpacedCenters: [string, string][][];
export declare const renderDonutLabel: (content: IDonutChartContent) => (this: Highcharts.Chart) => void;
export declare const createBaseChartConfig: (colors: string[], rightAligned: boolean, customLabelFormatter: ((this: Highcharts.Point) => string) | null, height?: number) => Highcharts.Options;
export declare const processDonutData: (content: IDonutChartContent) => {
    donutCount: number;
    namesInLegend: string[];
};
export declare const createDonutSeries: (donut: IOneDonut, donutIndex: number, donutCount: number, showInLegend: boolean, options?: IDonutChartOptions) => ({
    name: string;
    size: string;
    data: number[];
    center: [string, string];
    enableMouseTracking: boolean;
    dataLabels: {
        formatter: (this: Highcharts.Point) => string;
        useHTML: boolean;
        distance: number;
        x: number;
        verticalAlign: string;
        crop: boolean;
        overflow: string;
    };
    type: "pie";
} | {
    type: string;
    data: {
        name: string;
        y: number;
        color: string | undefined;
    }[];
    center: [string, string];
    size: string;
    innerSize: string;
    showInLegend: boolean;
    dataLabels: {
        enabled: boolean;
    };
})[] | null;
export declare const getConfigFromTabData: (content: IDonutChartContent, height?: number) => Highcharts.Options;
