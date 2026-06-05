import { default as React } from '../../../node_modules/react';
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
    name: string;
    color?: string;
    className?: string;
}
/**
 * Icon component that uses FC-Util-Styles icon font
 * Icon names correspond to keys in the $fa-list-of-icons map
 */
export declare const Icon: React.FC<IconProps>;
