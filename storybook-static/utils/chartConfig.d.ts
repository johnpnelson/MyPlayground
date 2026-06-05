import { IColumnChartContent } from '../types/column-chart-types';
import { ISimpleLineChartContent } from '../types/simple-line-chart-types';
import { IStackedColumnChartContent } from '../types/stacked-column-chart-types';
import { ICombinationChartContent } from '../types/combination-chart-types';
import * as Highcharts from 'highcharts';
export declare class ChartConfigFactory {
    static createChartConfig(content: IColumnChartContent): Highcharts.Options;
    static createLineChartConfig(content: ISimpleLineChartContent): Highcharts.Options;
    static createCombinationChartConfig(content: ICombinationChartContent): Highcharts.Options;
    private static createTooltipConfig;
    /**
     * Create default tooltip formatter function
     * Converted from Angular JavaScript to React TypeScript
     */
    private static createDefaultTooltip;
    /**
     * Safe version of number.toFixed()
     */
    private static fixedIfNum;
    /**
     * Formats number as percent or currency if requested
     */
    private static formatNumber;
    /**
     * Convert ISO string to UTC month or pass through
     */
    private static isoToUtcMonthOrPassthrough;
    /**
     * Create stacked column chart configuration
     */
    static createStackedColumnChartConfig(content: IStackedColumnChartContent): Highcharts.Options;
}
