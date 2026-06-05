import { default as React } from '../../../node_modules/react';
import { IHeatMapWidgetData } from './HeatMap.types';
import { WidthPreferenceEnum } from '../../enums/DashboardEnums';
export interface HeatMapProps {
    widgetData?: IHeatMapWidgetData;
    title?: string;
    subtitle?: string;
    className?: string;
    widthPreference?: WidthPreferenceEnum;
    dataSource?: string;
}
export declare const HeatMap: React.FC<HeatMapProps>;
