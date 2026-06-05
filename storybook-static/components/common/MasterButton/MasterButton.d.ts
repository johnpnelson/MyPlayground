import { default as React } from '../../../../node_modules/react';
import { IMasterButtonConfig, IUrlAndText } from '../../../types/column-chart-types';
/**
 * Master button component for chart actions
 */
export interface MasterButtonProps {
    config: IMasterButtonConfig | IUrlAndText;
}
export declare const MasterButton: React.FC<MasterButtonProps>;
