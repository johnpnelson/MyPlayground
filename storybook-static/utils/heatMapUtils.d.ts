import { default as Highcharts } from 'highcharts';
import { IHeatMapContent, HeatMapRow, HeatMapSeriesData } from '../components/HeatMap/HeatMap.types';
export declare const heatMapLogic: {
    shouldShowNoContentMessage(content: IHeatMapContent): boolean;
    getSeriesData(data: HeatMapRow[]): HeatMapSeriesData[];
    getXAxis(data: HeatMapRow[]): string[];
    getYAxis(data: HeatMapRow[]): string[];
};
interface ChartOptionsParams {
    title?: string;
    subtitle?: string;
    xLabels: string[];
    yLabels: string[];
    seriesData: HeatMapSeriesData[];
}
export declare function getHeatMapChartOptions({ xLabels, yLabels, seriesData, }: ChartOptionsParams): Highcharts.Options;
export {};
