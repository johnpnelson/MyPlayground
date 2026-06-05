import { default as React } from '../../../../node_modules/react';
export interface DropdownOption {
    label: string;
    value: string;
    count?: number;
}
interface SimpleDropdownProps {
    options: DropdownOption[];
    selectedValue: string;
    onValueChange: (value: string) => void;
    showCount?: boolean;
    label?: string;
    className?: string;
}
export declare const SimpleDropdown: React.FC<SimpleDropdownProps>;
export default SimpleDropdown;
