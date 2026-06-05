import { default as React } from '../../../../node_modules/react';
import { IUrlAndText } from '../../../types/column-chart-types';
/**
 * Dive link component for additional navigation
 */
export interface DiveLinkProps {
    diveLink: IUrlAndText;
    className?: string;
    dataTestId?: string;
}
export declare const DiveLink: React.FC<DiveLinkProps>;
