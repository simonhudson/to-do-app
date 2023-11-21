import { FormFieldProps } from '@/components/form/types';

export interface CheckboxProps extends FormFieldProps {}

export interface CheckboxGroupProps {
	handleCategoryChange?: Function;
	items: array;
	legend: string;
	required?: boolean;
}
