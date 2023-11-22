import { FormFieldProps } from '@/components/form/types';

export interface CheckboxProps extends FormFieldProps {}

export interface CheckboxGroupProps {
	handleItemChange?: Function;
	items: CheckboxProps[];
	legend: string;
	required?: boolean;
}
