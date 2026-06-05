import { IColumnChartContent, IColumnChartOptions } from '../types/column-chart-types';
import { ISimpleLineChartContent, ISimpleLineChartOptions } from '../types/simple-line-chart-types';
type ChartContent = IColumnChartContent | ISimpleLineChartContent;
type ChartOptions = IColumnChartOptions | ISimpleLineChartOptions;
export declare const isTabbed: (content: ISimpleLineChartContent | ISimpleLineChartContent[]) => content is ISimpleLineChartContent[];
export declare const ChartHelpers: {
    shouldShowNoContentMessage(content: ChartContent): boolean;
    /**
     * X-axis formatter to handle month coercion
     */
    xAxisFormatterToCoerceMonth(): (this: {
        value: string | number;
    }) => string;
    /**
     * Create Y-axis label formatter based on chart options
     */
    createYAxisLabelFormatter(options?: ChartOptions): (this: {
        value: number;
    }) => string;
    /**
     * Custom tick positioner for responsive label display
     */
    tickPositioner(this: {
        tickPositions: number[];
        categories: string[];
    }): number[];
    /**
     * Get series colors from dashboard color palette
     */
    getSeriesColors(seriesCount: number, dashboardColors: ReadonlyArray<{
        normal: string;
    }>): string[];
    /**
     * Tick positioner functions for custom axis tick positioning
     */
    tickPositioners: {
        tickPercentageBy(tickIncrement: number): (this: any) => number[];
        tickUseZeroAsMin(tickIncrement: number): (this: any) => number[];
    };
    createTickPositionerFunction(tickIncrement: number, forcedMin?: number, forcedMax?: number, adjustMinToForceMax?: boolean): (this: any) => number[];
};
export {};
