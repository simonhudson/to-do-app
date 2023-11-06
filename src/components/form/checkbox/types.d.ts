import { FormFieldProps } from '@/components/form/types';

export interface CheckboxProps extends FormFieldProps {}

export interface CheckboxGroupProps {
	handleCategoryChange?: Function;
	items: CheckboxProps[];
	legend: string;
	required?: boolean;
}
