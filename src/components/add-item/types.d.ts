import { FormEventHandler } from 'react';
import { Category } from '@/types/category';

export interface AddItemProps {
	categoriesData: Categories[];
	handleCategoryChange: Function;
	handleNameChange: Function;
	isInvalid?: { [key: string]: boolean };
	nameFieldValue: string;
	onSubmit: FormEventHandler;
}
