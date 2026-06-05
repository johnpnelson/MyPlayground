import { default as React } from '../../../node_modules/react';
import { IDonutChartContent } from '../../types/donut-chart';
import { WidthPreferenceEnum } from '../../enums/DashboardEnums';
export interface DonutChartProps {
    widgetData?: {
        content: IDonutChartContent | IDonutChartContent[];
        tagName: string;
        subtitle?: string;
    };
    title?: string;
    className?: string;
    widthPreference?: WidthPreferenceEnum;
    dataSource?: string;
    height?: number;
}
export declare const DonutChart: React.FC<DonutChartProps>;
